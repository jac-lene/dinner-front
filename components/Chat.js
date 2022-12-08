import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import NavBar from './NavBar'

const Chat = () => {
  const [isLoading, setLoading] = useState(true);
  const [chats, setChats] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation()
  const getChats = async () => {
    try {
      const response = await fetch('https://dinnerapp-backend.herokuapp.com/' + 'allchats/' + '1');
      const json = await response.json();
      setChats(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getChats();
  }, []);


  const renderMessage = ({ item }) => {
    return (
      <>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/group.png')} />
        
        <View  style={styles.incoming} >
        <Text style={styles.subtext}>Hey everyone! We’re preparing a roast and some mashed potatoes for the dinner. Anyone have side suggestions they’d like to bring?</Text>
        </View>
        
        </View>
        </TouchableOpacity>

        <View style={styles.divider}>
        <View style={styles.lines}></View>
          </View>
      </>
    );
  };

    return (
      <SafeAreaView 
      style={styles.appContainer}
      >
      <ScrollView>
        
        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Christmas Dinner 12/25</Text>
        </View>
  
      <View 
      style={styles.body}
      >
        <View>

          <FlatList
          data={chats}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/group.png')} />
        
        <View  style={styles.incoming} >
        <Text style={styles.subtext}>Hey everyone! We’re preparing a roast and some mashed potatoes for the dinner. Anyone have side suggestions they’d like to bring?</Text>
        </View>
        
        </View>
        </TouchableOpacity>

        <View style={styles.divider}>
        <View style={styles.lines}></View>
          </View>
       

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/group.png')} />
        <View style={styles.incoming} >
        <Text style={styles.subtext}>Tom: All good! Want to try brin...</Text>
        </View>
        </View>

        <View style={styles.divider}>
        <View style={styles.lines}></View>
          </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={styles.message}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/group.png')} />
        <View style={styles.incoming} >
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
        fontSize: 26,
        fontWeight: 'bold',
      },
        body: {
      marginHorizontal: 30,
      marginTop: 30,
      // paddingBottom: 100,
      // backgroundColor: 'yellow'
  },
    message: {
      // flex: 1,
      flexDirection: 'row',
      alignItems:'flex-end',
    },
    subtext: {
        fontSize: 18, 
    },
    nextButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 45,
        marginVertical: 35,
        width: 100,
        backgroundColor: '#9747FF',
      },
    nextButtonText: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#fff',
    },
    incoming: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      marginHorizontal: 10,
      marginVertical: 5,
      padding: 20,
      backgroundColor: '#D9D9D9',
    },
  buttonText: {
      fontSize: 20,
      color: '#fff',
  },
  buttonTextSocial: {
      fontSize: 20,
      color: 'black',
  },
 
  });
   

export default Chat;