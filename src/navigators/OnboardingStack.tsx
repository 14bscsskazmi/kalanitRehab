import React, {FunctionComponent} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import OnboardingScreenContainer1 from '../screens/onboarding/OnboardingScreen1';

const AppStack = createNativeStackNavigator();

const OnboardingStack: FunctionComponent = function MainNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="OnboardingScreen1"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreenContainer1}
      />
    </AppStack.Navigator>
  );
};

export default OnboardingStack;
