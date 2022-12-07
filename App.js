import { ActivityIndicator, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import StackNavigator from './stacks/StackNavigator'
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-splash-screen'
import React, { useState } from 'react';

let poppins = { 'PoppinsReg': require('./assets/fonts/Poppins-Regular.otf') }

export default function App() {
 
 const [isLoaded] = useFonts(poppins)

 if (!isLoaded) {
  return null
 }

return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <StackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
