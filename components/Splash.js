import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {
    const navigation = useNavigation()
    const [carousel, setCarousel] = useState(0)


  return (
    <SafeAreaView style={styles.appContainer}>
    <StatusBar style="light" />

    


    { carousel === 0 ?  
    <View style={styles.titleCont}>
    <Text style={styles.title}>Host an Event</Text>
    <View style={styles.textCont}>
    <View style={styles.titleCont} >
        <TouchableOpacity  onPress={() => { setCarousel(1) }} >
            <Text style={styles.text} > Have an open seat at the table? </Text>
        </TouchableOpacity> 
    </View> 
    </View>
    </View>
    : null }
  

    { carousel === 1 ? 
     <View style={styles.titleCont}>
     <Text style={styles.title}>Grab a Seat</Text>
     <View style={styles.textCont}>
     <View style={styles.titleCont} >
         <TouchableOpacity  onPress={() => { setCarousel(2) }} >
             <Text style={styles.text} > Maybe you’re looking for that extra seat?  </Text>
         </TouchableOpacity> 
     </View> 
     </View>
     </View>
    : null }

    { carousel === 2 ? 
     <View style={styles.titleCont}>
     <Text style={styles.title}>Share the Experience</Text>
     <View style={styles.textCont}>
     <View style={styles.titleCont} >
         <TouchableOpacity  onPress={() => { setCarousel(0) }} >
             <Text style={styles.text} > Whether you want to display your hospitality or provide great company, we have your back in finding the right connection. </Text>
         </TouchableOpacity> 
     </View> 
     </View>
     </View>
    : null }


    
    
    
    <View style={styles.buttonCont}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
    </View>
       
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingHorizontal: 30,
    },
    titleCont: {
        flex: 5,
    },
    title: {
    //   flex: 2,
      fontSize: 40,
      fontWeight: 'bold',
      paddingTop: 180,
      textAlign: 'center',
      paddingHorizontal: 60,
    },
    text: {
      fontSize: 19,
      textAlign: 'center',
    },
    textCont: {
        paddingTop: 210,
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
      button: {
        backgroundColor: 'grey',
        fontSize: 19,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: 50,
        height: 40,
      },
      buttonCont: {
        flex: 2,
        borderRadius: 10,
        paddingTop: 0,
      },
  });

export default Splash