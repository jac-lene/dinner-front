import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react';

const Name = () => {
  const navigation = useNavigation()
  const [firstName, setFirstName] = useState("")
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

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >

   { !isKeyboardVisible ?  <View style={styles.progBarCont}>
        <View style={styles.progBar1}></View>
        <View style={styles.progBar2}></View>
      </View> : <View style={{marginTop: 100}}></View> } 

    <View style={styles.body}>

      <Text style={styles.header}>What is your name?</Text>

          
      <View style={styles.nameForm}>

        <Text style={styles.formText}>First Name</Text>

            <View>
          <TextInput 
              style={[styles.input, {paddingHorizontal: 20}]}
              placeholder={"First Name"}
              label={"First Name"}
              onChangeText={newText => setFirstName(newText)}
          />
          </View>

        <Text style={styles.formText}>Last Name</Text>
        <View style={styles.input}></View>

    </View>
    
    </View>

    

    <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Photos')}>
            <View >
                <Text style={styles.buttonText}>Next</Text>
            </View>
            </TouchableOpacity>
            
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    // backgroundColor: '#fff'
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 200,
    // backgroundColor: 'orange'
  },
  next: {
    paddingBottom: 150,
    paddingLeft: 280,
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 45,
      marginHorizontal: 45,
      marginVertical: 10,
      width: 100,
      backgroundColor: '#9747FF',
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

export default Name