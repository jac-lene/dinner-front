import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView 
    style={styles.appContainer}
    >
    <ScrollView>
      
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>My profile</Text>
      </View>

    <View 
    style={styles.body}
    >

      <View style={styles.verifyCont}>
      <Image source={require('../assets/images/verify.png')} />
      <Text style={styles.verify}>Verify my profile</Text>
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
  <Text style={styles.imageText}>+</Text>
</View>

</View>




      <View>
      
      <Text style={styles.header}>A little bit about me</Text>
      
      </View>

        <View style={styles.smallForm}>
        <View style={styles.input}><Text style={styles.inputText}>I have always been an extrovert and love having meaningful conversation with like-minded individuals over cup of coffee or dinner. For the last few years I have avoided holiday family dinners as I feel ostracized by my family. I feel there is a lack of community during Holiday season which I really have been craving. </Text></View>
        </View>

      <View>
      
        <Text style={styles.header}>My basics</Text>
      
      </View>

      <View style={styles.basic}>
          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/verify.png')} />
              <Text style={styles.basicText}>Nonbinary (They/Them)</Text>
            </View>
            <Text style={styles.subHeader}>Change</Text>
          </View>

          <View style={styles.divider}>
      <View style={styles.lines}></View>
        </View>

          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/verify.png')} />
              <Text style={styles.basicText}>San Francisco, CA</Text>
            </View>
            <Text style={styles.subHeader}>Change</Text>
          </View>

          <View style={styles.divider}>
      <View style={styles.lines}></View>
    </View>

          <View style={styles.basicsRow}>
            <View style={styles.basicsRow}>
              <Image source={require('../assets/images/verify.png')} />
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
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Google</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Facebook</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSocial]} onPress={() => navigation.navigate('Phone')}>
            <View>
                <Text  style={[styles.buttonText, styles.buttonTextSocial]}>Continue with Apple</Text>
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
      backgroundColor: '#6750A4',
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
auth: {
  // backgroundColor: 'yellow'
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
verify: {
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 5,
},
verifyCont: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
},
imageForm: {
  justifyContent:'center',
  alignItems:'center',
},
image: {
height: 164,
width: 164,
backgroundColor: '#D9D9D9',
justifyContent:'center',
alignItems:'center',
borderRadius: 10,
marginVertical: 30,
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