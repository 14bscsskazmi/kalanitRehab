import React, {FunctionComponent} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import QuestionarioScreenContainer from '../screens/authentication/patient-screens/Questionario';
import SlashScreenContainer from '../screens/authentication/shared-components/SplashScreen';
import WelcomeScreenContainer from '../../App1';

import LoginScreenContainer from '../screens/authentication/shared-components/LoginScreen';
// import WelcomeScreenContainer from '../screens/authentication/shared-components/WelcomeScreen';
import RegisterPatientScreenContainer from '../screens/authentication/patient-screens/RegisterScreen';
import RegisterDoctorScreenContainer from '../screens/authentication/doctor-screens/RegisterScreen';

const AppStack = createNativeStackNavigator();
const AuthenticationStack: FunctionComponent = function MainNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="SplashScreen" component={SlashScreenContainer} />
      <AppStack.Screen name="LoginScreen" component={LoginScreenContainer} />
      <AppStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreenContainer}
      />
      <AppStack.Screen
        name="QuestionarioScreen"
        component={QuestionarioScreenContainer}
      />
      <AppStack.Screen
        name="RegisterPatientScreen"
        component={RegisterPatientScreenContainer}
      />
      <AppStack.Screen
        name="RegisterDoctorScreen"
        component={RegisterDoctorScreenContainer}
      />
    </AppStack.Navigator>
  );
};

export default AuthenticationStack;
