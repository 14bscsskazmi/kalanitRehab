/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {store} from './store';
import {Provider} from 'react-redux';
import AppContainer from './src/navigators';

// import * as poseDetection from '@tensorflow-models/pose-detection';
// import AsyncStorage from '@react-native-community/async-storage';
// import {ScaledSheet} from 'react-native-size-matters';

const App: FunctionComponent = function App() {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <AppContainer />
      </View>
    </Provider>
  );
};
export default App;
