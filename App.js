import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import StackNavigator from './stacks/StackNavigator'
import AuthProvider from './context/AuthContext';


export default function App() {

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
