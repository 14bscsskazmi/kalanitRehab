import React, {FunctionComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import OnboardingStack from './OnboardingStack';
import AuthenticationStackContainer from './AuthenticationStack';

const AppStack = createNativeStackNavigator();

const AppContainer: FunctionComponent = function MainNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="AuthenticationStack"
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen
          name="AuthenticationStack"
          component={AuthenticationStackContainer}
        />

        <AppStack.Screen name="OnboardingStack" component={OnboardingStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
