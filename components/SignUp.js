import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.appContainer}>
  
    <View style={styles.body}>

      <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')} />
      </View>

      <Text style={styles.header}>Hello there!</Text>

    </View>
    

  
    
    <View style={styles.auth}>
            <TouchableOpacity style={[styles.button, styles.buttonSignUp]} onPress={() => navigation.navigate('Choose')}>
            <View>
                <Text  style={styles.buttonText}>Sign up</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.lines}></View>
              <Text style={styles.divText}>or</Text>
              <View style={styles.lines}></View>
            </View>
        
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Google</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Facebook</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Apple</Text>
            </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dotStyle: {
      width: 20,
      height: 20,
      backgroundColor: 'gray',
      borderRadius: 50,
      marginHorizontal: 5,
  },
  button: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      height: 45,
      marginHorizontal: 45,
      marginVertical: 15,
    }, 
  buttonSignUp: {
    backgroundColor: '#6750A4',
  },
  buttonSocial: {
    backgroundColor: '#E8DEF8',
  },
  buttonText: {
      fontSize: 20,
      color: '#fff',
  },
  buttonTextSocial: {
      fontSize: 20,
      color: 'black',
  },
  auth: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 100,
    // backgroundColor: 'yellow'
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'stretch',
    marginHorizontal: 45,
    marginVertical: 10,
    height: 45,
    // backgroundColor: 'yellow'
  },
  divText: {
    fontSize: 20,
    fontWeight: 'semibold', 
  },
  lines: {
    flex: 1,
    height: .7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 5,
    marginVertical: 25,
    backgroundColor: 'black',
  }
});

export default SignUp