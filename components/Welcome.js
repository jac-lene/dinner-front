import { View, Image, SafeAreaView, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  return (
      <SafeAreaView style={styles.welcome}>

      <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')}/>
      </View>

      <View style={styles.body}>
        <View style={styles.headline}>
          <Text style={styles.header}>Welcome to the </Text><Text style={[styles.header, styles.color]}>Fam!</Text>
        </View>
      </View>
      <View style={styles.body}>
          <Text style={styles.text}>
            We are excited to have you here. With Fam, you can search for local events and celebrate the little things with your community.
          </Text> 
          <Text style={styles.text}>
            Fam is a safe space for everyone, so be yourself and enjoy the connections you can build with others.
          </Text>

          <Text style={styles.ps}>
            Sound good?
          </Text>

          <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllDinners')}>
            <View >
                <Text style={styles.buttonText}>I agree</Text>
            </View>
            </TouchableOpacity>
            
      </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
welcome: {
    flex: 1,
    backgroundColor: '#E8DEF8',
    justifyContent: 'center',
    alignItems: 'center',
},
logo: {
  paddingVertical: 50,
},
headline: {
    flexDirection: 'row'
},
header: {
  fontSize: 40,
  fontWeight: 'bold',
  fontFamily: 'PoppinsReg',
  paddingVertical: 10,
},
color: {
  color: '#9747FF',
},
body: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
    marginVertical: 10,
},
text: {
  fontSize: 18,
  textAlign: 'center',
  lineHeight: 30,
},
ps: {
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 30,
  marginVertical: 40,
},
next: {
  paddingVertical: 40,
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

})

export default Welcome