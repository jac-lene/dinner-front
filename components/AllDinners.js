import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import NavBar from './NavBar'
import DinnerCard from './DinnerCard'
import { useNavigation } from '@react-navigation/native'

const AllDinners = ( props ) => {
  const navigation = useNavigation()
  const [filter, setFilter] = useState(false)

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>

      <View style={styles.body}>

      <View>
        <View  style={styles.searchBar}>
          <Text style={styles.searchtext}>Search</Text>
          <TouchableWithoutFeedback onPress={() => setFilter(!filter)}>
          <Image source={require('../assets/images/filter.png')} />
          </TouchableWithoutFeedback>
        </View>
      </View>
{ filter ? <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.filterCont}>
      <View  style={styles.filter}>
          <Image source={require('../assets/images/tinyarrow.png')} />
          <Text style={styles.filtertext}>New</Text>
      </View>
      <View  style={styles.filter}>
          <Image source={require('../assets/images/tinyarrow.png')} />
          <Text style={styles.filtertext}>Distance</Text>
      </View>
      <View  style={styles.filter}>
          <Image source={require('../assets/images/tinyarrow.png')} />
          <Text style={styles.filtertext}>Event</Text>
      </View>
      <View  style={styles.filter}>
          <Image source={require('../assets/images/tinyarrow.png')} />
          <Text style={styles.filtertext}>Venue</Text>
      </View>
      </View>
      </ScrollView>: null}
      
      

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
    flexDirection: 'row',
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchtext: {
    marginHorizontal: 40,
    fontSize: 20,
    color: 'grey'
  },
  filterCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  filter: {
    flexDirection: 'row',
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingRight: 20,
    paddingLeft: 10,
    marginTop: 20,
  },
  filtertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6750A4',
    paddingLeft: 10,
  }
})

export default AllDinners