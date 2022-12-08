import { View, Image, SafeAreaView, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashREAL = () => {
    const navigation = useNavigation()

  return (
      <SafeAreaView style={styles.splash}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Start')}>
      <View style={styles.logo}>
        <Image source={require('../assets/images/logoBig.png')}/>
      </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
splash: {
    flex: 1,
    backgroundColor: '#E8DEF8'
},
logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
})

export default SplashREAL