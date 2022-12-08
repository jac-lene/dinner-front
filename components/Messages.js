import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NavBar from './NavBar'

const Messages = () => {
    const navigation = useNavigation()

    return (
      <SafeAreaView 
      style={styles.appContainer}
      >
      <ScrollView>
        
        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Messages</Text>
        </View>
  
      <View 
      style={styles.body}
      >
          <View>
        <Text style={styles.header}>Conversations</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 80, height: 80}} source={require('../assets/images/group.png')} />
        <View  style={{marginLeft: 10}} >
        <Text style={styles.subHeader}>Christmas 12/25</Text>
        <Text style={styles.subtext}>Tom: All good! Want to try brin...</Text>
        </View>
        </View>
        </TouchableOpacity>

        <View style={styles.divider}>
        <View style={styles.lines}></View>
          </View>
       

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 80, height: 80}} source={require('../assets/images/group.png')} />
        <View  style={{marginLeft: 10}} >
        <Text style={styles.subHeader}>Thanksgiving 11/23</Text>
        <Text style={styles.subtext}>Tom: All good! Want to try brin...</Text>
        </View>
        </View>

        <View style={styles.divider}>
        <View style={styles.lines}></View>
          </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 80, height: 80}} source={require('../assets/images/group.png')} />
        <View style={{marginLeft: 10}} >
        <Text style={styles.subHeader}>Friendsgiving 11/20</Text>
        <Text style={styles.subtext}>Tom: All good! Want to try brin...</Text>
        </View>
        </View>
        </TouchableOpacity>


  
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
        height: 90,
        backgroundColor: '#EEE8F4',
        justifyContent: 'center',
        alignItems: 'center',
      },
      mainHeaderText: {
        fontSize: 28,
        fontWeight: 'bold',
      },
    message: {
      flexDirection: 'row',
    //   justifyContent: 'flex-start',
      alignItems: 'center',
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
  

export default Messages