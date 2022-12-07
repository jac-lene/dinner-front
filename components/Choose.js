import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Choose = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
  
      <View style={styles.progBarCont}>
        <View style={styles.progBar1}></View>
        <View style={styles.progBar2}></View>
      </View>

    <View style={styles.body}>

      <Text style={styles.header}>Which one are you?</Text>

    </View>
    

  
    
    <View style={styles.choiceCont}>
            <TouchableOpacity style={[styles.button, styles.buttonHost]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.textHost}>Host</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonAttend]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={styles.textAttend}>Attend</Text>
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
    fontWeight: 'bold',
    textAlign: 'left',
  },
  body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
  },
  button: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 200,
      marginHorizontal: 45,
      marginVertical: 15,
      backgroundColor: '#6750A4',
    },
  buttonHost: {
    backgroundColor: '#6750A4',
  },
  buttonAttend: {
    backgroundColor: '#C9B9FB',
  },
  textHost: {
      fontSize: 20,
      color: '#fff',
  },
  textAttend: {
      fontSize: 20,
      color: 'black',
  },
  choiceCont: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 100,
    // backgroundColor: 'yellow'
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
    backgroundColor: '#C9B9FB',
  }
});

export default Choose