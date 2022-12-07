import { View, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native'
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

      <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')} />
      </View>

    { carousel === 0 ?  
        <><TouchableOpacity style={styles.body} onPress={() => { setCarousel(1); } }>
          <View style={styles.illos}>
             <Image source={require('../assets/images/host.png')} />
          </View>
          <Text style={[styles.header, { fontFamily: 'PoppinsReg' }]}>Host an Event</Text>
          <Text style={styles.text}>Have an open seat at the table?</Text>
          <View style={styles.dotContainer}>
            <TouchableOpacity onPress={() => { setCarousel(0); } } style={[styles.dotStyle, { opacity: carousel === 0 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(1); } } style={[styles.dotStyle, { opacity: carousel === 1 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(2); } } style={[styles.dotStyle, { opacity: carousel === 2 ? 1 : .4 }]}>
            </TouchableOpacity>
          </View>
        </TouchableOpacity><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <View>
              <Text style={styles.buttonText}>Skip to sign up</Text>
            </View>
          </TouchableOpacity></>
    : null }
    { carousel === 1 ?  
        <><TouchableOpacity style={styles.body} onPress={() => { setCarousel(2); } }>
          <View >
             <Image source={require('../assets/images/seat.png')} />
          </View>
          <Text style={styles.header}>Grab a Seat</Text>
          <Text style={styles.text}>Maybe you’re looking for that extra seat?</Text>
          <View style={styles.dotContainer}>
            <TouchableOpacity onPress={() => { setCarousel(0); } } style={[styles.dotStyle, { opacity: carousel === 0 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(1); } } style={[styles.dotStyle, { opacity: carousel === 1 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(2); } } style={[styles.dotStyle, { opacity: carousel === 2 ? 1 : .4 }]}>
            </TouchableOpacity>
          </View>
        </TouchableOpacity><TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <View>
              <Text style={styles.buttonText}>Skip to sign up</Text>
            </View>
          </TouchableOpacity></>
    : null }
    { carousel === 2 ?  
        <><TouchableOpacity style={styles.body} onPress={() => { setCarousel(0); } }>
          <View >
             <Image source={require('../assets/images/home.png')} />
          </View>
          <Text style={styles.header}>Share the Experience</Text>
          <Text style={styles.text}>Whether you want to display your hospitality or provide great company, we have your back in finding the right connection.</Text>
          <View style={styles.dotContainer}>
            <TouchableOpacity onPress={() => { setCarousel(0); } } style={[styles.dotStyle, { opacity: carousel === 0 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(1); } } style={[styles.dotStyle, { opacity: carousel === 1 ? 1 : .4 }]}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setCarousel(2); } } style={[styles.dotStyle, { opacity: carousel === 2 ? 1 : .4 }]}>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            
              <Text style={styles.buttonText}>Skip to sign up</Text>
          
          </TouchableOpacity></>

    : null }
    
  
    
    
 
    
       
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#E8DEF8'
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'PoppinsReg',
      paddingVertical: 10,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginTop: 60,
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
        marginVertical: 20,
        marginTop: 30,
        // backgroundColor: 'yellow',
        height: 20,
    },
    dotStyle: {
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        opacity: .4,
        borderRadius: 50,
        margin: 2,

    },
    button: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9747FF',
        borderRadius: 50,
        height: 45,
        marginHorizontal: 40,
      },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    logo: {
      marginTop: 90,
    },
    illos: {
      marginVertical: 40,
    }
  });

export default Splash