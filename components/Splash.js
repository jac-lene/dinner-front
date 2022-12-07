import { View, Text, StyleSheet, StatusBar, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation()
    const [carousel, setCarousel] = useState(0)


  return (
    <SafeAreaView style={styles.appContainer}>
    <StatusBar style="light" />

    <View style={styles.appContainer}>

    <View style={styles.titleCont}>
        <Text style={styles.title}>Welcome to Fam!</Text>
    </View>

  

    { carousel === 0 ?   <View style={styles.titleCont} onPress={() => { setCarousel(1) }}>
        <Text style={styles.text}>It’s nice to see you Fam, thanks for coming by. Whatever time of year it may be, it’s nice to be able to sit down and share a meal and some quality time with others. </Text>
    </View> : null }
  

    { carousel === 1? <View style={styles.titleCont} onPress={() => { setCarousel(2) }}>
        <Text style={styles.text}>We want to help connect you with others who are looking for a similar experience, but might not have the people available.  </Text>
    </View> : null }

    { carousel === 2 ? <View style={styles.titleCont} onPress={() => { setCarousel(0) }}>
        <Text style={styles.text}> Whether you want to display your hospitality or provide great company, we have your back in finding the right connection.  </Text>
    </View> : null }
    
    <View>
        <Button title='Sign up' onPress={() => navigation.navigate('SignUp')}/>
    </View>
       
        
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingHorizontal: 30,
    },
    titleCont: {
        flex: 4,
    },
    title: {
      fontSize: 50,
      paddingTop: 180,
      textAlign: 'center',
      paddingHorizontal: 60,
    },
    text: {
      fontSize: 17,
      textAlign: 'center',
    },
    circle: {
        width: 44,
        height: 44,
        borderRadius: 44/2
     },
  });

export default Splash