import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationPortion from './src/screens/NavigationPortion';


export default function App () {
  return (
    <NavigationContainer>
      <NavigationPortion />
    </NavigationContainer>
  );
}