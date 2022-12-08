import { View, Image, SafeAreaView, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  return (
      <SafeAreaView style={styles.welcome}>
       
      <View style={styles.logo}>
        <Image source={require('../assets/images/logo.png')}/>
      </View>
        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
welcome: {
    flex: 1,
    backgroundColor: '#E8DEF8'
},
logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
})

export default Welcome