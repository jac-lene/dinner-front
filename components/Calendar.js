import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NavBar from './NavBar'

const Calendar = () => {
    const navigation = useNavigation()

    return (
      <SafeAreaView 
      style={styles.appContainer}
      >
      <ScrollView>
        
        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Calendar</Text>
        </View>
  
       
      <View 
      style={styles.body}
      >
        <View style={[styles.body, {marginVertical: 20}]}>
         <Image source={require('../assets/images/calendar.png')} />
        </View>
       
       

     
      
        <View  style={{marginLeft: 10, marginVertical: 30,  alignItems: 'flex-start' }} >
        <Text style={styles.subHeader}>Wednesday, December 25, 2022</Text>
        <Text style={[styles.subHeader, {fontWeight: 'null'}]}>Christmas Dinner</Text>
        <Text style={[styles.subHeader, styles.message, {fontWeight: 'null'}]}>4:00 pm - 8:30 pm</Text>
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
    mainHeader: {
        height: 110,
        backgroundColor: '#EEE8F4',
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    message: {
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 25, 
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginTop: 5,
    },
    body: {
      marginHorizontal: 30,
      // marginTop: 50,
      // paddingBottom: 100,
      // backgroundColor: 'yellow'
  },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      marginRight: 5,
      paddingVertical: 20,
      // backgroundColor: 'orange'
    },
    subHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    subtext: {
        fontSize: 18,
        color: 'grey'
    },
  divider: {
    flexDirection: 'row',
  },
  lines: {
    flex: 1,
    height: .7,
    alignSelf: 'stretch',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: 'black',
  },

  });
  

export default Calendar