import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NavBar = () => {
  const navigation = useNavigation()
    
  return (
    <SafeAreaView>

    <View style={styles.color}>

      <View style={styles.icons}>

        <TouchableOpacity onPress={() => navigation.navigate('AllDinners')}>
        <Image source={require('../assets/images/Icon-home.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/images/Icon-profile.png')}/>
        </TouchableOpacity>
            
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Image source={require('../assets/images/Icon-chat.png')}/>
        </TouchableOpacity>
            
        <TouchableOpacity onPress={() => navigation.navigate('AllDinners')}>
        <Image source={require('../assets/images/Icon-cal.png')}/>
        </TouchableOpacity>

      </View>

    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
color: {
    height: 150,
    backgroundColor: '#E8DEF8'      
},
icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
}
});

export default NavBar