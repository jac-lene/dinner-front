import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Button, Input } from 'react-native'
import React from 'react'
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import AuthContext from '../context/AuthContext';

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password, password2);
    registerUser(username, password, password2)
  }

  return (
    <Formik>
        <View>
            <Text style={styles.formText}>Username</Text>
            <TextInput 
                style={styles.input}
                placeholder={"Username"}
                label={"Username"}
                onChangeText={newText => setUsername(newText)}
            />
            <Text style={styles.formText}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder={"*********"}
                label={"Password"}
                onChangeText={newText => setPassword(newText)}
            />
            <Text style={styles.formText}>Confirm Password</Text>
            <TextInput 
                style={styles.input}
                placeholder={"********"}
                label={"Password2"}
                onChangeText={newText => setPassword2(newText)}
            />
            <Button title="Submit" onPress={handleSubmit} />  
        </View>
    </Formik>
    // <SafeAreaView 
    // style={styles.appContainer}
    // >

    //   <View style={styles.progBarCont}>
    //     <View style={styles.progBar1}></View>
    //     <View style={styles.progBar2}></View>
    //   </View>

    // <View style={styles.body}>

    //   <Text style={styles.header}>Set Up Your Login Info</Text>

    //   <View style={styles.registerForm}>

    //     <Text style={styles.formText}>Username</Text>
    //     <TextInput 
    //         style={styles.input}
    //         placeholder={"Username"}
    //         for={'username'}
    //         onChange={e => setUsername(e.target.value)}
    //     />
    //     <Text style={styles.formText}>Password</Text>
    //     <TextInput 
    //         style={styles.input}
    //         placeholder={"*********"}
    //         for={'password'}
    //         onChange={e => setPassword(e.target.value)}
    //     />
    //     <Text style={styles.formText}>Confirm Password</Text>
    //     <TextInput 
    //         style={styles.input}
    //         placeholder={"********"}
    //         for={'password2'}
    //         onChange={e => setPassword2(e.target.value)}
    //     />

        // <View>
        //     <TouchableOpacity title="Submit" style={styles.button} onPress={handleSubmit}>
        //     <View >
        //         <Text style={styles.buttonText}>Sign Up</Text>
        //     </View>
        //     </TouchableOpacity>
        // </View>

    // </View>
    // {/* <Formik style={styles.registerForm}>
        // <Text style={styles.formText}>Username</Text>
        // <TextInput 
        //     style={styles.input}
        //     placeholder={"Username"}
        //     id={'username'}
        //     onChange={e => setUsername(e.target.value)}
        // />
        // <Text style={styles.formText}>Password</Text>
        // <TextInput 
        //     style={styles.input}
        //     placeholder={"*********"}
        //     id={'password'}
        //     onChange={e => setPassword(e.target.value)}
        // />
        // <Text style={styles.formText}>Confirm Password</Text>
        // <TextInput 
        //     style={styles.input}
        //     placeholder={"********"}
        //     id={'password2'} 
        //     onChange={e => setPassword2(e.target.value)}
        // />
        // <View>
        //     <TouchableOpacity title="Submit" style={styles.button} onPress={handleSubmit}>
        //     <View >
        //         <Text style={styles.buttonText}>Sign Up</Text>
        //     </View>
        //     </TouchableOpacity>
            
        // </View>

    // </Formik> */}

    // </View>


    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 registerForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
 },
 appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  progBarCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'stretch',
    marginTop: 40,
    marginHorizontal: 45,
    height: 10,
    // marginBottom: 200,
    // backgroundColor: 'yellow'
  },
  progBar1: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    borderRadius: 50,
    backgroundColor: '#6856C4',
  },
  progBar2: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    paddingLeft: 10,
    borderRadius: 50,
    backgroundColor: '#C9B9FB',
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
    marginRight: 200,
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
    }
});

export default Register