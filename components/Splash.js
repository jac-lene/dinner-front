import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { useCallback } from 'react';


const Splash = () => {
    const navigation = useNavigation()
    const [carousel, setCarousel] = useState(0)

    const [fontsLoaded] = useFonts({
        'PoppinsReg': require('../assets/fonts/Poppins-Regular.otf'),
      });
      if (!fontsLoaded) {
        return null;
      }

  return (
    <SafeAreaView style={styles.appContainer}>

    { carousel === 0 ?  
        <TouchableOpacity style={styles.body} onPress={() => { setCarousel(1) }} >
            <Text style={[styles.header, {fontFamily: 'PoppinsReg'}]}>Host an Event</Text>
            <Text style={styles.text} >Have an open seat at the table?</Text>
        </TouchableOpacity> 
    : null }
    { carousel === 1 ?  
        <TouchableOpacity style={styles.body}  onPress={() => { setCarousel(2) }} >
            <Text style={styles.header}>Grab a Seat</Text>
            <Text style={styles.text} >Maybe you’re looking for that extra seat? </Text>
        </TouchableOpacity> 
    : null }
    { carousel === 2 ?  
        <TouchableOpacity style={styles.body} onPress={() => { setCarousel(0) }} >
            <Text style={styles.header}>Share the Experience</Text>
            <Text style={styles.text} >Whether you want to display your hospitality or provide great company, we have your back in finding the right connection.</Text>
        </TouchableOpacity> 
    : null }
    
    <View style={styles.dotContainer}>
        <TouchableOpacity onPress={() => { setCarousel(0) }} style={[styles.dotStyle, {opacity: carousel === 0 ? 1 : .4 } ]}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCarousel(1) }} style={[styles.dotStyle, {opacity: carousel === 1 ? 1 : .4 } ]}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCarousel(2) }} style={[styles.dotStyle, {opacity: carousel === 2 ? 1 : .4 } ]}>
        </TouchableOpacity>
    </View>
    
    
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <View>
            <Text  style={styles.buttonText}>Sign Up</Text>
        </View>
    </TouchableOpacity>
    
       
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
      height: 240,
      fontFamily: 'PoppinsReg',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    text: {
      fontSize: 20,
      textAlign: 'center'
    },
    dotContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 40,
    },
    dotStyle: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        opacity: .4,
        borderRadius: 50,
        margin: 2,
        marginTop: -300,
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6750A4',
        borderRadius: 50,
        height: 45,
        marginHorizontal: 40,
        marginBottom: 220,
      },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
  });

export default Splash