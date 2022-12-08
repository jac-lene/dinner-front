import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import NavBar from './NavBar'
import DinnerCard from './DinnerCard'
import { useNavigation } from '@react-navigation/native'

const AllDinners = ( props ) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>

      <View style={styles.body}>

      <View>
        <View  style={styles.searchBar}></View>
      </View>
      <View>
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
      <DinnerCard />
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
    // backgroundColor: '#DACEEF',
    // alignItems: 'center',
  },
  body: {
    marginHorizontal: 30,
    marginTop: 40,
  },
  searchBar: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
  },
})

export default AllDinners