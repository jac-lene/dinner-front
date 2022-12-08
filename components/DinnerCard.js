import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow';


const DinnerCard = ({name, city, state, dateTime}) => {
  return (

    <SafeAreaView style={styles.appContainer}>

    <View>

    <ImageBackground source={require('../assets/images/dinner1.png')} resizeMode="stretch" style={styles.image}>
    {/* <View  style={styles.cardCont1}> */}
      <View style={styles.detailsBar}>
      <View style={styles.detailsTop}>
        <View>
            <Text style={styles.detailsTitle}>{name}</Text>
            <Text style={styles.detailsHost}>By Julia Gregg</Text>
        </View>
      </View>
      </View>
    {/* </View> */}
      </ImageBackground>

    <View  style={styles.cardCont2}>
      
      <View style={styles.detailsBottom}>
        <Text style={styles.detailsBold}>{city}, {state}</Text>
        <Text style={styles.detailsReg}>{dateTime}</Text>
        <Text style={styles.detailsReg}>RSVP by 12/18</Text>
      </View>

      </View>


    </View>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: 'space-between',
    //   marginHorizontal: 30,
     marginVertical: 20,
      // alignItems: 'center',
    },
    cardCont1: {
      backgroundColor: '#C8C8C8',
      flexDirection: 'row',
    //   justifyContent: 'center',
      alignItems: 'flex-end',
      height: 242,
    },
    cardCont2: {
      backgroundColor: 'rgba(218, 206, 239, 0.4)',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 117,
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
    },
    detailsBar: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 84,
        justifyContent: 'center',
    },
    detailsTop: {
        marginHorizontal: 25,
    },
    detailsBottom: {
        marginHorizontal: 25,
        marginVertical: 20,
        // backgroundColor: 'yellow'
    },
    detailsTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 4,
    },
    detailsHost: {
        color: 'white',
        fontSize: 18,
    },
    detailsBold: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 4,
    },
    detailsReg: {
        fontSize: 18,
    },
    image: {
        flexDirection: 'row',
        //   justifyContent: 'center',
          alignItems: 'flex-end',
        //   marginHorizontal: 30,
          height: 242,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

  });

export default DinnerCard