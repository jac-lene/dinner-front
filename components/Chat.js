import { View, Text, SafeAreaView, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native'
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
  
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={[styles.message, {marginHorizontal: 10, marginRight: 80}]}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/p2.png')} />
        
        <View  style={styles.incoming} >

        <View  style={{paddingRight:30, marginLeft:20,}}>
        <Text style={styles.subtext} >Hey everyone! We’re preparing a roast and some mashed potatoes for the dinner. Anyone have side suggestions they’d like to bring?</Text>
        </View>

        </View>

        </View>
        </TouchableOpacity>

    );
  };

    return (
      <SafeAreaView 
      style={styles.appContainer}
      >
        
        <View style={styles.mainHeader}>
          <Text style={styles.mainHeaderText}>Christmas Dinner 12/25</Text>
        </View>
      
      <View style={styles.apart}>
      <View 
      style={styles.body}
      >

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={[styles.message, {marginHorizontal: 10, marginRight: 80}]}>
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/p1.png')} />
        
        <View  style={styles.incoming} >
        <View  style={{paddingHorizontal: 20}}>
        <Text style={styles.subtext}>That sounds great! I was thinking about a green bean casserole. How does that sound? </Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={[styles.message, {marginHorizontal: 10, marginRight: 80}]} >
        <Image style={{borderRadius: 100, width: 40, height: 40}} source={require('../assets/images/p3.png')} />
        <View style={styles.incoming} >
          <View style={{paddingHorizontal: 30}}>
        <Text style={styles.subtext}>Absolutely! I can make my Vegan version of a roast. Would that work?</Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={[styles.messageSend, {marginRight: 80}]}>
        <View style={styles.sending} >
          <View style={{paddingHorizontal: 30}}>
        <Text style={styles.subtextSend}>I would also love Vegan options! I can bring a dish as well to share :) </Text>
        </View>
        </View>
        </View>
        </TouchableOpacity>
          </View>


          <FlatList
          data={chats}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

          </View>
          <View  style={styles.cardCont2}>
    <View style={styles.interestCont}>

    <View style={styles.detailsBottom}>
      <TextInput style={styles.detailsBold}>Enter your message here</TextInput>
    </View>
    
      <TouchableOpacity onPress={() => navigation.navigate('DinnerDetails')}>
    <View style={styles.interest}>
      <Text style={styles.interestText}>Send</Text>
    </View>
      </TouchableOpacity>

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
    },
    cardCont2: {
      backgroundColor: '#FAFAFA',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 79,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    detailsBottom: {
      marginHorizontal: 30,
      marginVertical: 20,
      // backgroundColor: 'yellow'
  },
  detailsBold: {
    fontSize: 20,
},
    interestCont: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    interest: {
      flexDirection: 'row',
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 25,
      // justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 30,
      paddingHorizontal: 20,
    },
    interestText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    mainHeader: {
        height: 100,
        backgroundColor: '#EEE8F4',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
      },
      mainHeaderText: {
        fontSize: 26,
        fontWeight: 'bold',
      },
      apart: {
        flex: 1,
        marginVertical: 10,
        // justifyContent: 'space-between'
  },
    message: {
      // flex: 1,
      flexDirection: 'row',
      alignItems:'flex-end',
    },
    messageSend: {
      // flex: 1,
      flexDirection: 'row-reverse',
      alignItems:'flex-end',
    },
    subtext: {
        fontSize: 18, 
        textAlign: 'left',
    },
    subtextSend: {
        fontSize: 18, 
        textAlign: 'justify',
        color: '#fff'
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
      paddingVertical: 20,
      backgroundColor: '#D9D9D9',
    },
    sending: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      marginHorizontal: 10,
      marginVertical: 5,
      paddingVertical: 20,
      backgroundColor: '#6750A4',
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