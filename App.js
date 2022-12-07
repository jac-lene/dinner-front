import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import StackNavigator from './stacks/StackNavigator'
import AuthProvider from './context/AuthContext';
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
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>
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
