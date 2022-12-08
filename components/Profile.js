import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [fetchedProfiles, setFetchedProfiles] = useState([]);

  const test = () => {
    console.log(profile);
  }

  const getProfiles = async () => {
    const response = await fetch('https://dinnerapp-backend.herokuapp.com/profiles/');
    const allProfiles = await response.json();
    setFetchedProfiles(allProfiles);
  }


  useEffect(async () => {
    await getProfiles();
    for (let i = 0; i < fetchedProfiles.length; i++) {
      if (fetchedProfiles[i].user == user.id) {
        setProfile(fetchedProfiles[i]);
      } else {
        console.log("No profile associated with this user");
      }
    }
  }, []);

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >
    <ScrollView>
      
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>My Profile</Text>
        <Text>Logged in as {`${user.username}`}</Text>
      </View>

    <View 
    style={styles.body}
    >


<View style={styles.verifyCont}>
      <View style={styles.verifyImg}>
      <Image source={require('../assets/images/verify.png')} />
      <Text style={styles.verifyText}>Verify my profile</Text>
      </View>
      <View  style={styles.verifyImg}>
      <Image source={require('../assets/images/forward.png')} /> 
      </View>
</View>
  

      <View style={styles.divider}>
        <View style={styles.lines}></View>
      </View>
   

        <View>
      
      <Text style={styles.header}>My photos</Text>
      <Text style={styles.subHeader}>Add some images of yourself</Text>
      </View>

      <View style={styles.imageForm}>

<View style={styles.image}>
  <Image source={require('../assets/images/profPic.png')} />
</View>

</View>




      <View>
      
      <Text style={styles.header}>A little bit about me</Text>
      
      </View>

        <View >
        <View style={styles.input}><Text style={styles.inputText}>I have always been an extrovert and love having meaningful conversation with like-minded individuals over cup of coffee or dinner. For the last few years I have avoided holiday family dinners as I feel ostracized by my family. I feel there is a lack of community during Holiday season which I really have been craving. </Text></View>
        </View>

      <View>
      
        <Text style={styles.header}>My basics</Text>
      
      </View>

      <View style={styles.basic}>
          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/nonbin.png')} />
              <Text style={styles.basicText}>Nonbinary (They/Them)</Text>
            </View>
            <Text style={styles.subHeader}>Change</Text>
          </View>

          <View style={styles.divider}>
      <View style={styles.lines}></View>
        </View>

          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/location.png')} />
              <Text style={styles.basicText}>San Francisco, CA</Text>
            </View>
            <Text style={styles.subHeader}>Change</Text>
          </View>

          <View style={styles.divider}>
      <View style={styles.lines}></View>
    </View>

          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/ethnicity.png')} />
              <Text style={styles.basicText}>Ethnicity</Text>
            </View>
            <Text style={styles.subHeader}>Add</Text>
          </View>

          <View style={styles.divider}>
      <View style={styles.lines}></View>
    </View>

      </View>
    
<View style={styles.sectionCont}>
    <View style={styles.section}>
      <Text style={styles.header}>Link other accounts</Text>
      <Text style={styles.subHeader}>(optional)</Text>
      </View>
    </View>

    <View >
          
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Connect Google</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Connect Facebook</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Connect Apple</Text>
            </View>
            </TouchableOpacity>
        </View>

        <View
        style={styles.next}
        >
            <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Welcome')}>
            <View >
                <Text style={styles.nextButtonText}>Finish</Text>
            </View>
            </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
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
  body: {
    marginHorizontal: 45,
    // marginTop: 50,
    // paddingBottom: 100,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 5,
    paddingVertical:5,
    // backgroundColor: 'orange'
  },
  subHeader: {
    fontSize: 18,
    // marginVertical: 10,
  },
  next: {
    paddingBottom: 100,
    paddingLeft: 270,
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
  input: {
    alignSelf: 'stretch',
    borderRadius: 15,
    marginVertical: 20,
    marginHorizontal: 5,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  formText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  inputText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 45,
    // marginHorizontal: 45,
    marginVertical: 15,
  }, 
buttonSignUp: {
  backgroundColor: '#6750A4',
},
buttonSocial: {
  backgroundColor: '#E8DEF8',
},
buttonText: {
    fontSize: 20,
    color: '#fff',
},
buttonTextSocial: {
    fontSize: 20,
    color: 'black',
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
section: {
  flexDirection: 'row',
  alignItems: 'center',
},
sectionCont: {

},
verifyText: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 5,
},
verifyCont: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
verifyImg: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
},
imageForm: {
  justifyContent:'center',
  alignItems:'center',
},
image: {
height: 144,
width: 144,
justifyContent:'center',
alignItems:'center',
borderRadius: 10,
marginVertical: 20,
},
imageText: {
fontSize: 50,
color: '#6750A4',
},
basic: {
  marginTop: 20,
},
basicsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
basicText: {
  fontSize: 22,
  marginHorizontal: 8,
}
});


export default Profile