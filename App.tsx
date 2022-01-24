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
// import AsyncStorage from '@react-native-community/async-storage';
// import {ScaledSheet} from 'react-native-size-matters';
import {Camera} from 'expo-camera';
import Canvas from 'react-native-canvas';
const similarity = require('compute-cosine-similarity');

import * as tf from '@tensorflow/tfjs';
import {cameraWithTensors, decodeJpeg} from '@tensorflow/tfjs-react-native';

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
  const [imageData, setImageData] = useState(null);

  const [textureDims, setTextureDims] = useState({});

  function cosineDistanceMatching(poseVector1, poseVector2) {
    let cosineSimilarity = similarity(poseVector1, poseVector2);
    let distance = 2 * (1 - cosineSimilarity);
    return Math.sqrt(distance);
  }
  const convertToVector(){
    
  }
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
        setLoaded(true);
        loadBlazefaceModel();
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
      return model;
    };

    const loadBlazefaceModel = async () => {
      const model = await blazeface.load();
      return model;
    };
  }, []);

  const handleImageTensorReady = (images, updateCameraPreview, gl) => {
    const loop = async () => {
      const modelName = 'posenet';

      if (modelName === 'posenet') {
        if (modal != null) {
          // Load an image as a Uint8Array
          const imageUri = 'https://en.wikipedia.org/wiki/Waqar_Zaka#/media/File:Waqar_Zaka.jpg';
          const response = await fetch(imageUri, {}, {isBinary: true});
          const imageDataArrayBuffer = await response.arrayBuffer();
          const imageData = new Uint8Array(imageDataArrayBuffer);

          // Decode image data to a tensor
          const imageTensor = decodeJpeg(imageData);
          console.log('image tensor: ', imageTensor);
          

          // const imageTensor = images.next().value;
          // const flipHorizontal = Platform.OS === 'ios' ? true : true;
          // const pose = await modal.estimateSinglePose(imageTensor, {
          //   flipHorizontal,
          // });
          // console.log('pose: ', pose);
          // setSinglePose({pose});
          // // handleCanvas();
          // // const context = ctx.getContext('2d');

          // ctx.clearRect(0, 0, CAM_WIDTH, CAM_HEIGHT);
          // await drawSkeleton(pose);
          // // setTimeout(() => {
            
          // // }, 20000);
          // tf.dispose([imageTensor]);
        }
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
    return (
      <TensorCamera
        // Standard Camera props
        style={styles.camera}
        type={Camera.Constants.Type.back}
        // zoom={0}
        // tensor related props
        cameraTextureHeight={CAM_HEIGHT}
        cameraTextureWidth={CAM_WIDTH}
        resizeHeight={210}
        resizeWidth={160}
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
  },
});
