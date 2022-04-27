import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useStorage} from '../utils/useStorage';

import WelcomeScreen from './WelcomeScreen';
import CityScreen from './CityScreen';
import apiVerify from '../api/apiVerify';

const Stack = createNativeStackNavigator();

const NavigationPortion = () => {
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apikey", "");
  
  if (apiKey != "") {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="CityDisplay" 
          component={CityScreen}
          options={{headerShown: false}} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="CityDisplay" 
          component={CityScreen}
          options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }
}

export default NavigationPortion;