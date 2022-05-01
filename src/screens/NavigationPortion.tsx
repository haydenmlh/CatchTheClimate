import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from './WelcomeScreen';
import CityScreen from './CityScreen';
import SettingScreen from './SettingScreen';
import {useStorage} from '../utils/useStorage';

const Stack = createNativeStackNavigator();

const NavigationPortion = () => {
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apiKey", "");

  if (apiKey != "") {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="CityDisplay"
          component = {CityScreen}
          options={{headerShown: false}} />
        <Stack.Screen 
          name="Settings"
          component= {SettingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component = {WelcomeScreen}
          options={{headerShown: false}} />
        <Stack.Screen 
          name="CityDisplay"
          component = {CityScreen}
          options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }
}

export default NavigationPortion;