import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

const DinnerDetails = () => {
  const navigation = useNavigation()
  const [filter, setFilter] = useState(false)

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>

      
    <View style={styles.bottom}>
      <View style={styles.image} >
<Image style={styles.round} source={require('../assets/images/dinner3.png')} resizeMode='cover'/>
      </View>

          <View style={styles.dotContainer}>
            <TouchableOpacity style={styles.dotStyle}>
            </TouchableOpacity>
            <TouchableOpacity  style={[styles.dotStyle, {opacity: 1}]} >
            </TouchableOpacity>
            <TouchableOpacity  style={styles.dotStyle}>
            </TouchableOpacity>
          </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.detailsTitle}>San Francisco, California</Text>
        <Text style={styles.detailsHost}>5:00 PM - Dec 25</Text>
        <Text style={styles.detailsHost}>Accepting people till 12/18</Text>
        <Image style={{marginTop: 10}} source={require('../assets/images/people.png')} />
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

  <View style={styles.detailsTop}>
    <View>
      <View style={styles.chat}>
      <Image source={require('../assets/images/chatbubble.png')} />
        <Text style={[styles.detailsHost, {marginLeft: 5}]}>Event Chat</Text>
      </View>
        <Text style={styles.smallText}>Ask questions, coordinate details, and connect with other attendees for this event through event chat.</Text>
    </View>  
  </View>

  <View style={styles.divider}>
      <View style={styles.lines}></View>
  </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.detailsHost}>House Rules</Text>
        <Text style={styles.smallText}>Read and agree to host rules to make sure your event is as exciting as possible.</Text>
    </View>  
  </View>

  <View style={styles.divider}>
      <View style={styles.lines}></View>
  </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.bigText}>Agenda</Text>
        <Text style={styles.detailsHost}>5:00: Doors open</Text>
        <Text style={styles.detailsHost}>6:00: Dinner</Text>
        <Text style={styles.detailsHost}>7:30: Drinks</Text>
        <Text style={styles.detailsHost}>8:30: Board game</Text>
    </View>  
  </View>

  <View style={styles.divider}>
      <View style={styles.lines}></View>
  </View>

  <View style={styles.detailsTop}>
    <View>
        <Text style={styles.bigText}>Location</Text>
        <Text style={styles.detailsHost}>1117 Overlook County, San Francisco, California</Text>
        <View  style={styles.map}>
        <Image source={require('../assets/images/map.png')}/>
        </View>
    </View>  
  </View>

</View>
    
    </ScrollView>

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
      // marginTop: 30,
  },
  detailsBottom: {
      marginHorizontal: 30,
      marginVertical: 20,
      // backgroundColor: 'yellow'
  },
  detailsTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      paddingBottom: 4,
      marginTop: 30,
  },
  detailsHost: {
      fontSize: 20,
      lineHeight: 32,
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
    },
    dotContainer: {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: -30,
      height: 20,
  },
  dotStyle: {
      width: 10,
      height: 10,
      backgroundColor: '#6750A4',
      opacity: .4,
      borderRadius: 50,
      margin: 2,
  },
  bigText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottom: {
    marginBottom: 50,
  },
  map: {
    marginVertical: 10,
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 18,
    color: 'grey'
  }
});

export default DinnerDetails