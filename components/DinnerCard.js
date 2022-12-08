import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow';


const DinnerCard = () => {
  return (

    <SafeAreaView style={styles.appContainer}>

    <View>

    <ImageBackground source={require('../assets/images/dinner1.png')} resizeMode="stretch" style={styles.image}>
    {/* <View  style={styles.cardCont1}> */}
      <View style={styles.detailsBar}>
      <View style={styles.detailsTop}>
        <View>
            <Text style={styles.detailsTitle}>Christmas Dinner</Text>
            <Text style={styles.detailsHost}>By Julia Gregg</Text>
        </View>
      </View>
      </View>
    {/* </View> */}
      </ImageBackground>

    <View  style={styles.cardCont2}>
      
      <View style={styles.detailsBottom}>
        <Text style={styles.detailsBold}>San Francisco, California</Text>
        <Text style={styles.detailsReg}>Dec 25 - 5:00 PM</Text>
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
      backgroundColor: 'rgba(218, 206, 239, 0.15)',
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





    body: {
      marginHorizontal: 45,
      marginTop: 50,
      borderRadius: 50,
      // paddingBottom: 300,
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
        backgroundColor: '#9747FF',
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
      marginLeft: 5,
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
      color: 'grey',
      textAlign: 'center',
      position: 'absolute',
      paddingHorizontal: 20,
      zIndex: 999,
    },
    radioForm: {
      justifyContent: 'center',
      marginVertical: 25,
    },
    radio: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    radioText: {
      fontSize: 24,
      fontWeight: 'bold'
    }
  });

export default DinnerCard