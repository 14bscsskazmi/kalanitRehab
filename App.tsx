/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
const similarity = require('compute-cosine-similarity');
const simplePose = require('./simple-pose.png');
// import AsyncStorage from '@react-native-community/async-storage';
// import {ScaledSheet} from 'react-native-size-matters';
import {Camera} from 'expo-camera';
import Canvas from 'react-native-canvas';

import * as tf from '@tensorflow/tfjs';
import {cameraWithTensors, decodeJpeg, fetch} from '@tensorflow/tfjs-react-native';

import * as posenet from '@tensorflow-models/posenet';
import * as blazeface from '@tensorflow-models/blazeface';

const TensorCamera = cameraWithTensors(Camera);


const CAM_WIDTH = Dimensions.get('window').width;
const CAM_HEIGHT = Dimensions.get('window').height;
const inputTensorWidth = CAM_WIDTH;
const inputTensorHeight = 600;
const AUTORENDER = true;

export default function CameraScreen() {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  const [isLoaded, setLoaded] = React.useState(false);
  const [modal, setModal] = React.useState();
  const [singlePose, setSinglePose] = React.useState();
  const [ctx, setCanvasContext] = useState(null);

  const [textureDims, setTextureDims] = useState({});
  const handleCanvas = canvas => {
    if (canvas === null) {
      return;
    }
    const context = canvas.getContext('2d');
    setCanvasContext(context);
  };
  const drawPoint = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#10f400';
    ctx.fill();
    ctx.closePath();
  };

  const drawSegment = (x1, y1, x2, y2) => {
    console.log(`${x1}, ${y1}, ${x2}, ${y2}`);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#00ff30';
    ctx.stroke();
    ctx.closePath();
  };

  const drawSkeleton = pose => {
    console.log(pose);
    const minPartConfidence = 0.85;
    for (var i = 0; i < pose.keypoints.length; i++) {
      const keypoint = pose.keypoints[i];
      if (keypoint.score < minPartConfidence) {
        continue;
      }
      console.log(keypoint);
      drawPoint(keypoint.position.x, keypoint.position.y);
    }
    const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
      pose.keypoints,
      minPartConfidence,
    );
    adjacentKeyPoints.forEach(keypoints => {
      drawSegment(
        keypoints[0].position.x,
        keypoints[0].position.y,
        keypoints[1].position.x,
        keypoints[1].position.y,
      );
    });
  };
  useEffect(() => {
    let isMounted = true;
    if (Platform.OS === 'ios') {
      setTextureDims({height: CAM_HEIGHT, width: CAM_WIDTH});
    } else {
      setTextureDims({height: CAM_HEIGHT, width: CAM_WIDTH});
    }

    (async () => {
      //console.log('here...')
      
      await tf.ready().then(tf => {
       
        // loadBlazefaceModel();
        loadPosenetModel();
      });
      // await tf.setbackend()
    })();

    const loadPosenetModel = async () => {
      const model = await posenet.load({
        architecture: 'ResNet50',
        outputStride: 16,
        inputResolution: {width: inputTensorWidth, height: inputTensorHeight},
        multiplier: 1,
        quantBytes: 2,
      });
      // console.log('loadPosenetModel....model', model);
      setModal(model);
      setLoaded(true);
      // return model;
    };

    const loadBlazefaceModel = async () => {
      const model = await blazeface.load();
      return model;
    };

    // await tf.ready().then((tf) => {
    //     console.log('tf...', tf)
    //     if (isMounted) {
    //         setLoaded(true);
    //     }
    // });
    // (async () => {
    //   const { status } = await Camera.requestPermissionsAsync();
    //   setHasPermission(status === 'granted');
    // })();
  }, []);
  //   if (hasPermission === null) {
  //     return <View />;
  //   }
  //   if (hasPermission === false) {
  //     return <Text>No access to camera</Text>;
  //   }
  function cosineDistanceMatching(poseVector1, poseVector2) {
    let cosineSimilarity = similarity(poseVector1, poseVector2);
    // return cosineSimilarity;

    let distance = 2 * (1 - cosineSimilarity);
    return Math.sqrt(distance);
  }

  const handleImageTensorReady = (images, updateCameraPreview, gl) => {
    const loop = async () => {
      const modelName = 'posenet';

      if (modelName === 'posenet') {
        
          // Load an image as a Uint8Array
          const imageTensor = images.next().value;

          // const imageUri1 = 'https://image.shutterstock.com/image-photo/full-body-black-man-600w-770647549.jpg';
          const imageUri1 = simplePose;

          const imageUri2 = 'https://image.shutterstock.com/image-photo/black-man-full-body-600w-624898259.jpg';

          //const response1 = await fetch(imageUri1, {}, {isBinary: true});
          const response2 = await fetch(imageUri2, {}, {isBinary: true});

          //const imageDataArrayBuffer1 = await response1.arrayBuffer();
          const imageDataArrayBuffer2 = await response2.arrayBuffer();
          // console.log('here: ',imageDataArrayBuffer);
          const imageData1 = new Uint8Array(imageUri1);
          const imageData2 = new Uint8Array(imageDataArrayBuffer2);

          // Decode image data to a tensor
          const imageTensor1 = decodeJpeg(imageData1);
          const imageTensor2 = decodeJpeg(imageData2);
          // console.log('image tensor: ', imageTensor2);
          const flipHorizontal = Platform.OS === 'ios' ? true : true;
          const outputStride = 32;
          if(modal){
            const pose1 = await modal.estimateSinglePose(imageTensor1, {
              outputStride,
              flipHorizontal,
            });
            const pose2 = await modal.estimateSinglePose(imageTensor, {
              outputStride,
              flipHorizontal,
            });
            let poseVector1 = [];
            let poseVector2 = [];
            for (const pose of pose1.keypoints){
              poseVector1.push(pose.position.x);
              poseVector1.push(pose.position.y);
              // console.log('position: ', pose.position.x);
            }
            for (const pose of pose2.keypoints){
              poseVector2.push(pose.position.x);
              poseVector2.push(pose.position.y);
              // console.log('position: ', pose.position.x);
            }
            const distance = cosineDistanceMatching(poseVector1, poseVector2);
            if(distance <= 0.11) {
              // console.log('cosine_similarity: ', distance);
              console.log('--------', distance);
            }
            else {
              // console.log('cosine_similarity: ', distance);
              console.log('No Match', distance);
            }
            
            // console.log('pose vector 2: ', poseVector2);

          }

        //   const imageTensor = images.next().value;
        //   const flipHorizontal = Platform.OS === 'ios' ? true : true;
        //   const pose = await modal.estimateSinglePose(imageTensor, {
        //     flipHorizontal,
        //   });
        //   console.log('images: ', pose);
        //   setSinglePose({pose});
        //   // handleCanvas();
        //   // const context = ctx.getContext('2d');
        //   ctx.clearRect(0, 0, CAM_WIDTH, CAM_HEIGHT);

        //   // await drawSkeleton(pose);

        //   tf.dispose([imageTensor]);
        
      } else {
        //
      }

      if (!AUTORENDER) {
        gl.endFrameEXP();
      }
      requestAnimationFrame(loop);
    };

    loop();
    // }
  };

  const camView = () => {
    // console.log('textureDims.height: ', textureDims.width);
    return (
      <TensorCamera
        // Standard Camera props
        style={styles.camera}
        type={Camera.Constants.Type.back}
        // zoom={0}
        // tensor related props
        cameraTextureHeight={CAM_HEIGHT}
        cameraTextureWidth={CAM_WIDTH}
        resizeHeight={CAM_HEIGHT}
        resizeWidth={CAM_WIDTH}
        resizeDepth={3}
        onReady={handleImageTensorReady}
        autorender={false}
      />
    );
  };

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>Loading Tensor Flow</Text>
          <ActivityIndicator />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.camera}>
        {camView()}
        <Canvas ref={handleCanvas} style={styles.canvas} />
        {/* <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    width: CAM_WIDTH,
    height: CAM_HEIGHT,
    zIndex: 200,
    borderWidth: 2,
    // borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 20,
  },
  cameraContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    height: CAM_HEIGHT,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});