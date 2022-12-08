import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'



const OneDinner = () => {
  const navigation = useNavigation()
  const [filter, setFilter] = useState(false)

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>

      
    <View>
      <View style={styles.image} >
<Image style={styles.round} source={require('../assets/images/dinner1.png')} resizeMode='cover'/>
      </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.detailsTitle}>San Francisco, California</Text>
        <Text style={styles.detailsHost}>RSVP by 12/18</Text>
        <Text style={styles.detailsHost}>Vegan Friendly</Text>
    </View>  
  </View>

    <View style={styles.divider}>
      <View style={styles.lines}></View>
    </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.detailsHost}>My husband and I have been empty-nesters for a few years now and really miss having a full table during the holidays. We want to open our home to anyone who wants to share a holiday dinner...</Text>
    </View>  
  </View>

  <View style={styles.divider}>
      <View style={styles.lines}></View>
  </View>

</View>
    
    </ScrollView>

    <View  style={styles.cardCont2}>
    <View style={styles.interestCont}>

    <View style={styles.detailsBottom}>
      <Text style={styles.detailsBold}>Dec 25</Text>
      <Text style={styles.detailsReg}>5:00 PM</Text>
    </View>
    
      <TouchableOpacity onPress={() => navigation.navigate('Confirmed')}>
    <View style={styles.interest}>
      <Text style={styles.interestText}>I'm interested</Text>
    </View>
      </TouchableOpacity>

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
  cardCont1: {
    backgroundColor: '#C8C8C8',
    flexDirection: 'row',
  //   justifyContent: 'center',
    alignItems: 'flex-end',
    height: 242,
  },
  cardCont2: {
    backgroundColor: '#6750A4',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 79,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  detailsTop: {
      marginHorizontal: 30,
  },
  detailsBottom: {
      marginHorizontal: 30,
      marginVertical: 20,
      // backgroundColor: 'yellow'
  },
  detailsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 4,
      marginTop: 20,
  },
  detailsHost: {
      fontSize: 18,
      lineHeight: 28,
  },
  detailsBold: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 4,
      color: 'white',
  },
  detailsReg: {
      fontSize: 18,
      color: 'white',
  },
  round: {
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    flex: 1,
    },
  image: {
        flexDirection: 'row',
    },
    divider: {
      flexDirection: 'row',
    },
    lines: {
      flex: 1,
      height: .7,
      alignSelf: 'stretch',
      marginVertical: 20,
      marginHorizontal: 30,
      backgroundColor: 'black',
    },
    interestCont: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    interest: {
      flexDirection: 'row',
      height: 45,
      backgroundColor: 'white',
      borderRadius: 25,
      // justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 30,
      paddingHorizontal: 20,
    },
    interestText: {
      fontWeight: 'bold',
      fontSize: 18,
    }
});


export default OneDinner