import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Birthday = () => {
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

      <View style={styles.headerStyle}>
      <Text style={styles.header}>When is your birthday?</Text>
      <Text style={styles.subHeader}>You must be 18+ to create an account.</Text>
      </View>

      <View style={styles.birthdayForm}>

        <View style={styles.smallForm}>
        <Text style={styles.formText}>Month</Text>
        <View style={styles.input}><Text style={styles.inputText}>03</Text></View>
        </View>

        <View style={styles.smallForm}>
        <Text style={styles.formText}>Day</Text>
        <View style={styles.input}><Text style={styles.inputText}>12</Text></View>
        </View>

        <View style={styles.smallForm}>
        <Text style={styles.formText}>Year</Text>
        <View style={styles.input}><Text style={styles.inputText}>1992</Text></View>
        </View>

    </View>

    </View>

    

    <View style={styles.next}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gender')}>
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
    paddingRight: 130,
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
    marginHorizontal: 45,
    // paddingBottom: 300,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    // backgroundColor: 'orange',
    paddingRight: 80,
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 10,
    // marginRight: 50,
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
  birthdayForm: {
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#C9B9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputText: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 999,
  },
  smallForm: {
    paddingHorizontal: 5,
  }
});

export default Birthday