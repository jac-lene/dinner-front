import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Button, Input, Keyboard } from 'react-native'
import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       () => {
         setKeyboardVisible(true); // or some other action
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password, password2);
    registerUser(username, password, password2)
    navigation.navigate('Choose')
  }

  return (

    <SafeAreaView style={styles.appContainer}>

    <View style={styles.body}>

    { isKeyboardVisible ? <View style={{marginTop: 100}}></View> : null } 

    <Text style={styles.header}>Create your account</Text>

    <Formik>
        <View style={styles.nameForm}>
            <Text style={styles.formText}>Username</Text>
            <TextInput 
                style={[styles.input, {paddingHorizontal: 20}]}
                placeholder={"Username"}
                label={"Username"}
                onChangeText={newText => setUsername(newText)}
            />
            <Text style={styles.formText}>Password</Text>
            <TextInput 
                style={[styles.input, {paddingHorizontal: 20}]}
                placeholder={"*********"}
                label={"Password"}
                onChangeText={newText => setPassword(newText)}
            />
            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput 
                style={[styles.input, {paddingHorizontal: 20}]}
                placeholder={"********"}
                label={"Password2"}
                onChangeText={newText => setPassword2(newText)}
            />
              <View style={styles.next}>
            <TouchableOpacity style={styles.button} title="Submit" onPress={handleSubmit} >
            <View >
                <Text style={styles.buttonText}>Sign up</Text>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    </Formik>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
     flex: 1,
     justifyContent: 'center',
     // alignItems: 'center',
   },
   body: {
     marginHorizontal: 40,
     // paddingBottom: 300,
     // backgroundColor: 'yellow'
 },
   header: {
     fontSize: 40,
     fontWeight: 'bold',
     textAlign: 'left',
     marginRight: 100,
     // backgroundColor: 'orange'
   },
   button: {
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 25,
       height: 45,
       marginHorizontal: 45,
       marginVertical: 10,
       width: 150,
       backgroundColor: '#6750A4',
     },
   buttonText: {
       fontSize: 20,
       fontWeight: 'semibold',
       color: '#fff',
   },
   nameForm: {
     paddingVertical: 40,
   },
   input: {
     alignSelf: 'stretch',
     height: 45,
     borderColor: 'grey',
     borderWidth: 1,
     borderRadius: 8,
     marginBottom: 10,
   },
   formText: {
     fontSize: 20,
     fontWeight: 'bold',
     paddingVertical: 10,
     },
     next: {
       paddingVertical: 40,
       paddingLeft: 180,
     },
     registerForm: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
 });
 

export default Register