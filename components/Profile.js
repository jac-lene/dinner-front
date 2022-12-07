import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >

 


    <View style={styles.body}>

   

    <View>
      
      <Text style={styles.header}>My photos</Text>
      <Text style={styles.subHeader}>Add some images of yourself</Text>
      </View>

    




      <View>
      
      <Text style={styles.header}>A little bit about me</Text>
      
      </View>

        <View style={styles.smallForm}>
        <View style={styles.input}><Text style={styles.inputText}>I have always been an extrovert and love having meaningful conversation with like-minded individuals over cup of coffee or dinner. For the last few years I have avoided holiday family dinners as I feel ostracized by my family. I feel there is a lack of community during Holiday season which I really have been craving. </Text></View>
        </View>

      <View>
      
        <Text style={styles.header}>My basics</Text>
      
      </View>

    </View>

    <View style={styles.auth}>
            <View style={styles.divider}>
              <View style={styles.lines}></View>
            </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.header}>Link other accounts</Text>
      <Text style={styles.subHeader}>(optional)</Text>
      </View>

    <View style={styles.auth}>
          
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

    

    <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
            <View >
                <Text style={styles.buttonText}>Finish</Text>
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
  body: {
    marginHorizontal: 45,
    marginTop: 50,
    // paddingBottom: 100,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 5,
    // backgroundColor: 'orange'
  },
  subHeader: {
    fontSize: 18,
    // marginVertical: 10,
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
      backgroundColor: '#6750A4',
    },
  buttonText: {
      fontSize: 20,
      fontWeight: 'semibold',
      color: '#fff',
  },
  input: {
    alignSelf: 'stretch',
    borderRadius: 10,
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  formText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inputText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  // backgroundColor: 'yellow'
},
divider: {
  flexDirection: 'row',
  marginHorizontal: 45,
  // backgroundColor: 'yellow'
},
lines: {
  flex: 1,
  height: .7,
  alignSelf: 'stretch',
  // marginHorizontal: 5,
  backgroundColor: 'black',
},
section: {
  flexDirection: 'row',
  // justifyContent: 'flex-start',
  alignItems: 'center',
  marginHorizontal: 45,
}
});


export default Profile