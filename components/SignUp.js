import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, YellowBox } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const SignUp = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.appContainer}>
  
    <View style={styles.body}>

      <View style={styles.logo}>
        <TouchableOpacity style={styles.dotStyle}></TouchableOpacity>
        <Text style={styles.logoText}>Fam</Text>
      </View>

      <Text style={styles.header}>Hello there!</Text>

    </View>
    

  
    
    <View style={styles.auth}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.buttonText}>Sign up</Text>
            </View>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.lines}></View>
              <Text style={styles.divText}>or</Text>
              <View style={styles.lines}></View>
            </View>
        
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.buttonText}>Continue with Google</Text>
            </View>
            </TouchableOpacity> */}

            <Button title={'Sign in with Google'} onPress={() => {
              GoogleSignin.configure({
                  webClientId: '723187836491-cvtd0470hr03dpb2nvqn9d4j50jh402a.apps.googleusercontent.com',
              });
              GoogleSignin.hasPlayServices().then((hasPlayService) => {
                  if (hasPlayService) {
                    GoogleSignin.signIn().then((userInfo) => {
                      console.log(JSON.stringify(userInfo))
                    }).catch((e) => {
                      console.log("ERROR IS: " + JSON.stringify(e));
                  })
                }
              }).catch((e) => {
                console.log("ERROR IS: " + JSON.stringify(e));
              })

            }} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.buttonText}>Continue with Facebook</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.buttonText}>Continue with Apple</Text>
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
      backgroundColor: '#6750A4',
    },
  buttonSU: {
    backgroundColor: '#6750A4',
  },
  buttonG: {
    backgroundColor: '#6750A4',
  },
  buttonF: {
    backgroundColor: '#6750A4',
  },
  buttonA: {
    backgroundColor: '#6750A4',
  },
  buttonText: {
      fontSize: 20,
      color: '#fff',
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