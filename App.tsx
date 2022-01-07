// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow strict-local
// //  */

import React, {useState} from 'react';
// import type {Node} from 'react';
import { cameraWithTensors, fetch, decodeJpeg, bundleResourceIO, renderToGLView } from '@tensorflow/tfjs-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs-core';
import '@mediapipe/pose';

const dp = require('./dp.png')

// // import * as mobilenet from '@tensorflow-models/mobilenet';
// // import { fetch, decodeJpeg } from '@tensorflow/tfjs-react-native';
// // import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
// // import { Camera, Constants } from 'expo-camera';
// // import * as tf from '@tensorflow/tfjs';

const App = () => {

  const model = poseDetection.SupportedModels.MoveNet;
  const detectorConfig = {
    modelType: poseDetection.movenet.modelType.MULTIPOSE_LIGHTNING,
    enableTracking: true,
    trackerType: poseDetection.TrackerType.BoundingBox  
  };
  const LoadModal = async () => {
    const detector = poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig).then((response) => {
      console.log('success: ', response)
    }).catch((error) => {
      console.log('error: ', error)
    })
    // // Load an image as a Uint8Array
    // const imageUri = dp;
    // const response = await fetch(imageUri, {}, { isBinary: true });
    // const imageDataArrayBuffer = await response.arrayBuffer();
    // const imageData = new Uint8Array(imageDataArrayBuffer);

    // // Decode image data to a tensor
    // const imageTensor = decodeJpeg(imageData);

    // const poses = await detector.estimatePoses(imageTensor);
    // console.log(poses);
  };
  

  const Section = () => {
    LoadModal();
    return (
      <View>
        {/* <TensorCamera
          style={styles.camera}
          // type={Camera.Constants.Type.back}
          // zoom={0}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={tensorDims.height}
          resizeWidth={tensorDims.width}
          // resizeDepth={3}
          // onReady={(imageAsTensors) => {}}
          // autorender={true}
        /> */}
      </View>
    );
  };

  return (
    <SafeAreaView>
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Header />
        <Section />
      </ScrollView>
    </SafeAreaView>
  );
};

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   camera: {
// //     position: 'absolute',
// //     left: 50,
// //     top: 100,
// //     width: 600 / 2,
// //     height: 800 / 2,
// //     zIndex: 1,
// //     borderWidth: 1,
// //     borderColor: 'black',
// //     borderRadius: 0,
// //   },
// // });

export default App;











// import React, { Component } from 'react';
// import { Camera } from 'expo-camera';

// import { View, Text, StyleSheet, Platform } from 'react-native'
// // import { CameraStyle } from './styles'
// import * as tf from '@tensorflow/tfjs';

// const TensorCamera = cameraWithTensors(Camera);

// class CameraTester2 extends Component {

//   constructor(props) {
//     super(props)
//   }

//   async componentDidMount() {
//     // await tf.ready()
//     console.log("TF Ready")
//   }

//   handleCameraStream(images, updatePreview, gl) {
//     const loop = async () => {
//         requestAnimationFrame(loop);
//     }
//     loop();
//   }

//   render() {

//     let textureDims;
//     if (Platform.OS === 'ios') {
//       textureDims = {
//         height: 1920,
//         width: 1080,
//       };
//     } else {
//       textureDims = {
//         height: 1200,
//         width: 1600,
//       };
//     }
//     function handleCameraStreamV2(image) {
//       const loop = async () => {
//         if (!hpmReady && !tfReady) {
//           tf.device_util.isMobile = () => true;
//           tf.device_util.isBrowser = () => false;
//           await tf.ready();
//           setTfReady(true);
//           //https://github.com/tensorflow/tfjs/issues/4098
//           await tf.setBackend('cpu');
//           console.log(tf.getBackend());
//           const model = await handpose.load();
//           console.log(model)
//           setHandposeModel(model)
//           setHpmReady(true)
//         }
        
//         if (handposeModel){
//           const imageAsTensors = await image.next().value;
//           console.log(imageAsTensors)
//           if (imageAsTensors){
//             const prediction = await handposeModel.estimateHands(imageAsTensors);
//             console.log(prediction);
//             if (prediction && prediction.length > 0) { 
//               const GE = new fp.GestureEstimator([fp.Gestures.ThumbsUpGesture]);
//               GE.estimate(prediction[0].landmarks, 4)
//                 .then(gesture => {
//                   console.log("Gesture: ", gesture);
//                   if (gesture.gestures !== undefined && gesture.gestures.length > 0) {  
//                     const confidence = gesture.gestures.map(
//                       (prediction) => prediction.confidence
//                     );
//                     const mxConfidence = confidence.indexOf(
//                       Math.max.apply(null, confidence)
//                     );
//                       console.log(''')
//                     // setEmoji(gesture.gestures[mxConfidence].name);
//                     console.log("emoji: ",emoji);
//                   }
//                 })
//                 .catch(e => {
//                   console.error("Prediction error", e.message, e.stack);
//                 })      
//             }
//             //console.log('Looping...')
//             //requestAnimationFrameId = requestAnimationFrame(loop);
//           }        
//         }      
//       }
//       loop();
//     }

//     return <View>
//       <TensorCamera
//         // Standard Camera props
//         style={styles.camera}
//         type={Camera.Constants.Type.front}
//         // Tensor related props
//         cameraTextureHeight={textureDims.height}
//         cameraTextureWidth={textureDims.width}
//         resizeHeight={320}
//         resizeWidth={320}
//         resizeDepth={3}
//         onReady={this.handleCameraStream}
//         autorender={true}
//       >
//       </TensorCamera>
//     </View>
    

//   }
// }


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     camera: {
//       position: 'absolute',
//       left: 50,
//       top: 100,
//       width: 600 / 2,
//       height: 800 / 2,
//       zIndex: 1,
//       borderWidth: 1,
//       borderColor: 'black',
//       borderRadius: 0,
//     },
//   });
// export default CameraTester2;