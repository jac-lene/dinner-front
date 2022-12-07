import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Location = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >

      <View style={styles.progBarCont}>
        <View style={styles.progBar1}></View>
      </View>

    <View style={styles.body}>

      <View>
      <Text style={styles.header}>Where are you located?</Text>
      <Text style={styles.subHeader}>Enter the city you’re in or use your current location.</Text>
      </View>

        <View style={styles.smallForm}>
        <View style={styles.input}><Text style={styles.inputText}>Current Location</Text></View>
        </View>

 

    </View>

    

    <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
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
  body: {
    marginHorizontal: 45,
    // marginTop: 50,
    paddingBottom: 100,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 150,
    // backgroundColor: 'orange'
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 10,
    marginRight: 50,
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
    height: 40,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
  },
  formText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inputText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    paddingHorizontal: 20,
    zIndex: 999,
  },
});


export default Location