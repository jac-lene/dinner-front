import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Photos = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >

      <View style={styles.progBarCont}>
        <View style={styles.progBar1}></View>
        <View style={styles.progBar2}></View>
      </View>

    <View style={styles.body}>

      <Text style={styles.header}>Add your picture</Text>
      <Text style={styles.subHeader}>Please use a picture of just yourself. Your host would love to see who they are planning with!</Text>

      <View style={styles.imageForm}>

        <View style={styles.image}>
          <Text style={styles.imageText}>+</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.buttonSocial} onPress={() => navigation.navigate('Photos')}>
      <View >
          <Text style={styles.buttonTextSocial}>Add from Instagram</Text>
      </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSocial} onPress={() => navigation.navigate('Photos')}>
      <View >
          <Text style={styles.buttonTextSocial}>Add from Facebook</Text>
      </View>
      </TouchableOpacity>


    </View>

    
    <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Photos')}>
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
    alignItems: 'center',
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
    paddingRight: 60,
    backgroundColor: '#6856C4',
  },
  progBar2: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    paddingLeft: 0,
    borderRadius: 50,
    backgroundColor: '#C9B9FB',
  },
  body: {
    marginHorizontal: 40,
    // paddingBottom: 300,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 200,
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
  buttonSocial: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 45,
      marginVertical: 10,
      backgroundColor: '#C9B9FB',
    },
  buttonText: {
      fontSize: 20,
      fontWeight: 'semibold',
      color: '#fff',
  },
  buttonTextSocial: {
      fontSize: 20,
      fontWeight: 'semibold',
      color: 'black',
  },
  imageForm: {
      justifyContent:'center',
      alignItems:'center',
  },
  image: {
    height: 164,
    width: 164,
    backgroundColor: '#D9D9D9',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  imageText: {
    fontSize: 50,
    color: '#6750A4',
    
  }
 
});


export default Photos