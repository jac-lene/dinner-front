import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
// import { GoogleSigninButton, GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { WEB_CLIENT_ID } from '../utils/keys';




const SignUp = () => {
  const navigation = useNavigation()

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userInfo, setUserInfo] = useState([]);


  
  // function configureGoogleSignin() {
  //   GoogleSignin.configure({
  //     scopes: ['email'],
  //     webClientId: WEB_CLIENT_ID,
  //     offlineAccess: true
  //   });
  //  }

  // useEffect(() => {
  //   configureGoogleSignin();
  //  }, []);
  
  // async function signIn() {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUserInfo(userInfo);
  //     setLoggedIn(true);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       Alert.alert('Process Cancelled');
  //     } else if (error.code === statusCodes.IN_PROGRESS){
  //       Alert.alert('Signin in progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       Alert.alert('Play services are not available')
  //     } else {
  //       Alert.alert('Something went wrong...', error.toString());
  //     }
  //   }
  //  }
  
  // async function signOut() {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setIsLoggedIn(false);
  //     setUserInfo([]);
  //   } catch (error) {
  //     Alert.alert('Something went wrong...', error.toString());
  //   }
  //  }
  
  // async function getCurrentUserInfo() {
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     setUserInfo(userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_REQUIRED) {
  //       Alert.alert('Please sign in');
  //       setIsLoggedIn(false);
  //     } else {
  //       Alert.alert('Something went wrong...', error.toString());
  //       setIsLoggedIn(false);
  //     }
  //   }
  //  }

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

            {/* <View style={styles.container}>
              <GoogleSigninButton
                style={styles.signInButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress = {() => signIn()}

              />
            </View> */}


        
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Google</Text>
            </View>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Phone')}>
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
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // signInButton: {
  //   width: 200,
  //   height: 50
  // }
});

export default SignUp