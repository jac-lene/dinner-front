import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Button, Input } from 'react-native'
import React from 'react'
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import AuthContext from '../context/AuthContext';

const NewProfile = () => {

//   const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://dinnerapp-backend.herokuapp.com/profiles/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "pronouns": "xx",
            "orientation": "xx",
            "photo": "xx",
            "gender": "xx",
            "age": "00",
            "profession": "xx",
            "bio": "xx",
            "location": "xx",
            "isHost": false,
            "isVerified": false,
            "birthdate": "2000-01-01",
            "user": null
        })
    });
    if (response) {
        console.log("RESPONSE: ", JSON.stringify(response))
    } else {
        alert("Something went wrong!");
    } 
    
  }

  return (
        <SafeAreaView>
            <View style={styles.registerForm}>
                <Text>Heyo</Text>
                <Button style={styles.button} title="Create Profile" onPress={handleSubmit} />  
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 subBtn: {
    color: "black",
 },
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

export default NewProfile