import React, {FunctionComponent} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
;
import SlashScreenContainer from '../screens/authentication/shared-components/SplashScreen';
import LanguageScreenContainer from '../screens/authentication/shared-components/LanguageScreen';

import WelcomeScreenContainer from '../../App1';


// import WelcomeScreenContainer from '../screens/authentication/shared-components/WelcomeScreen';

const AppStack = createNativeStackNavigator();
const AuthenticationStack: FunctionComponent = function MainNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="SplashScreen11"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="SplashScreen11" component={SlashScreenContainer} />
    
      <AppStack.Screen
        name="LanguageScreen11"
        component={LanguageScreenContainer}
      />
      <AppStack.Screen
        name="WelcomeScreen11"
        component={WelcomeScreenContainer}
      />
     
    </AppStack.Navigator>
  );
};

export default AuthenticationStack;
