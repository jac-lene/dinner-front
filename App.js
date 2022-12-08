<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button, Alert } from 'react-native';
=======
import { ActivityIndicator, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
>>>>>>> 92ecf01a391daf875cba661f5d8d069ac84c36fc
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import StackNavigator from './stacks/StackNavigator'
import { AuthProvider } from './context/AuthContext';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-splash-screen'
import React, { useEffect, useState } from 'react';


let poppins = { 'PoppinsReg': require('./assets/fonts/Poppins-Regular.otf') }

export default function App() {
 
 const [isLoaded] = useFonts(poppins)

 if (!isLoaded) {
  return null
 }

return (
<<<<<<< HEAD
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator/>
        </AuthProvider>
      </NavigationContainer>
=======
    <NavigationContainer>
      <StatusBar style="light"/>
      <StackNavigator/>
    </NavigationContainer>
>>>>>>> 92ecf01a391daf875cba661f5d8d069ac84c36fc
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
