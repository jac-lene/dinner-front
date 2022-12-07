import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>SignUp</Text>
      <Button onPress={() => navigation.navigate('Phone')} title='Sign Up!'/>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default SignUp