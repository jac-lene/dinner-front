import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NavBar from './NavBar'


const Confirmed = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.appContainer}>

    <View></View>

    <View style={styles.body}>

    <View>
            <View style={[styles.button, styles.boxConfirm]} >
            <View style={styles.buttonText}>
                <Image source={require('../assets/images/phone.png')} />
                <Text style={[styles.textAttend]}>Your seat is confirmed!</Text>
                <Text style={[styles.subAttend]}>Your dinner on Dec 25 at 5 PM is confirmed at Julia’s residence! We’ve added the event to your calendar as well. </Text>
            </View>
            </View>

            <View style={styles.selection}>
            <TouchableOpacity style={[styles.selectbutton]} onPress={() => navigation.navigate('Confirmed')}>
            <View style={styles.selectbuttonText}>
                <Text style={styles.subHost}>Set reminder</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.selectbutton, styles.detailbutton]} onPress={() => navigation.navigate('DinnerDetails')}>
            <View style={styles.selectbuttonText}>
                <Text style={styles.subHost}>Go to event details</Text>
            </View>
            </TouchableOpacity>
            </View>

    </View>

    </View>

    <NavBar />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   appContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  body: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    marginHorizontal: 40,
    // marginVertical: 300,
    // backgroundColor: 'yellow'
},
  buttonText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
  },
  selectbuttonText: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
  },
  selectbutton: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 45,
      marginHorizontal: 5,
      marginVertical: 10,
      backgroundColor: '#6750A4',
    },
  detailbutton: {
      backgroundColor: '#9747FF',
    },
  boxConfirm: {
      backgroundColor: 'rgba(218, 206, 239, 0.4)',
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 200,
      // marginHorizontal: 45,
      marginVertical: 10,
      // backgroundColor: '#6750A4',
  },
  textAttend: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
  },
  subHost: {
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      paddingHorizontal: 20,
  },
  subAttend: {
      fontSize: 20,
      textAlign: 'left',
      marginTop: 10,
      color: 'black',
      // paddingHorizontal: 20,
  },
  selection:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default Confirmed