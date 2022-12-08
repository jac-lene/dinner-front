import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import DinnerCard from './DinnerCard'
import { useNavigation } from '@react-navigation/native'

const AllDinners = ( props ) => {
  const navigation = useNavigation()
  const [filter, setFilter] = useState(false)
  const [dinners, setDinners] = useState()

  const getDinners = async () => {
    try {
      const response = await fetch('https://dinnerapp-backend.herokuapp.com/' + 'dinners');
      const json = await response.json();
      setDinners(json)
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    getDinners();
  }, []);

  const renderDinner = ({ item }) => {
    console.log(item)
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('OneDinner')}>
          <DinnerCard 
            name={item.name}
            city={item.city}
            state={item.state}
            dateTime={item.dateTime}
            photo={item.photo}
          />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      
      <View>

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
      <View style={styles.filter}>
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
      
      

    
      <FlatList
          style={{marginBottom: -50}}
          data={dinners}
          renderItem={renderDinner}
          keyExtractor={(item) => item.id}
        />
      </View>

      </View>

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