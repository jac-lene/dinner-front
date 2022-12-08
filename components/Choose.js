import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

const Choose = () => {
  const navigation = useNavigation()
  const [isHost, setIsHost] = useState(false);

  const chooseHost = async (e) => {
    e.preventDefault();
    setIsHost(true);
    navigation.navigate('Name');
  }

  return (
    <SafeAreaView 
    // style={styles.appContainer}
    >

      <View style={styles.progBarCont}>
        <View style={styles.progBar1}></View>
        <View style={styles.progBar2}></View>
      </View>

    <View style={styles.body}>

      <Text style={styles.header}>Which one are you?</Text>
      <Text style={styles.subHeader}>Help us determine how you will navigate the app.</Text>

    <View>
            <TouchableOpacity style={[styles.button, styles.buttonHost]} onPress={chooseHost}>
            <View style={styles.buttonText}>
                <Text style={[styles.textHost]}>Host</Text>
                <Text style={styles.subHost}>I’m looking to host a dinner/event</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonAttend]} onPress={() => navigation.navigate('Name')}>
            <View style={styles.buttonText}>
                <Text style={[styles.textAttend]}>Attend</Text>
                <Text style={[styles.subAttend]}>I'm looking for an open seat at the table</Text>
            </View>
            </TouchableOpacity>
            
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
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
  progBar2: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    paddingLeft: 170,
    borderRadiusRight: 50,
    backgroundColor: '#C9B9FB',
  },
  body: {
    // height: 100,
    // backgroundColor: 'yellow',
    marginTop: 150,
    marginHorizontal: 40,
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 200,
    // backgroundColor: 'orange'
  },
  subHeader: {
    fontSize: 22,
    textAlign: 'left',
    marginVertical: 10,
    marginRight: 80,
  },
  buttonText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
  },
  button: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 200,
      // marginHorizontal: 45,
      marginVertical: 10,
      backgroundColor: '#6750A4',
    },
  buttonHost: {
    backgroundColor: '#6750A4',
    
  },
  buttonAttend: {
    backgroundColor: '#C9B9FB',
  },
  textHost: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
  },
  textAttend: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
  },
  subHost: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      color: '#fff',
      paddingHorizontal: 20,
  },
  subAttend: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      color: 'black',
      paddingHorizontal: 20,
  },
});

export default Choose