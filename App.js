import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import StackNavigator from './stacks/StackNavigator'
import AuthProvider from './context/AuthContext';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-splash-screen'
import React, { useEffect, useState } from 'react';



// Import the functions you need from the SDKs you need
// import { initializeApp } from "react-native-firebase/app";
// import { getAnalytics } from "react-native-firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA8r4GtBKZ2vj6bd3oHb3dRCJ6lVfm28pY",
//   authDomain: "fam-app-370909.firebaseapp.com",
//   projectId: "fam-app-370909",
//   storageBucket: "fam-app-370909.appspot.com",
//   messagingSenderId: "723187836491",
//   appId: "1:723187836491:web:eebc90f3b50165f5a1cfce",
//   measurementId: "G-9EYS991TW8"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



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
