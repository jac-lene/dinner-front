import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Button, Input } from 'react-native'
import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik';
import AuthContext from '../context/AuthContext';

const Login = () => {

  const navigation = useNavigation();

  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fetchedUsers, setFetchedUsers] = useState([]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     username.length > 1 && loginUser(username, password);
//   };



    const getUsers = async (e) => {
        const response = await fetch("https://dinnerapp-backend.herokuapp.com/users/");
        const allUsers = await response.json()
        setFetchedUsers(allUsers);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        for (let i =0; i < fetchedUsers.length; i++) {
            if (fetchedUsers[i].username === username) {
                await setUser(fetchedUsers[i]);
                console.log('Set user');

            } else {
                console.log("Something went wrong!")
            }
            
        }
        console.log(user);
        navigation.navigate('Profile');
    }

    useEffect(() => {
        getUsers();
        console.log(JSON.stringify(fetchedUsers));
    }, []);


    const loaded = () => {
        return (
            <Formik>
                <View>
                    <Text style={styles.formText}>Username</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={"Username"}
                        label={"Username"}
                        onChangeText={newText => setUsername(newText)}
                    />
                    <Text style={styles.formText}>Password</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={"*********"}
                        label={"Password"}
                        onChangeText={newText => setPassword(newText)}
                    />
                    <Button title="Submit" onPress={handleSubmit} />  
                </View>
            </Formik>
        )
    } 

    const loading = () => {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
  return (

    <View>

        {fetchedUsers && fetchedUsers.length ? loaded() : loading()}

    </View>

    // <Formik>
    //     <View>
    //         <Text style={styles.formText}>Username</Text>
    //         <TextInput 
    //             style={styles.input}
    //             placeholder={"Username"}
    //             label={"Username"}
    //             onChangeText={newText => setUsername(newText)}
    //         />
    //         <Text style={styles.formText}>Password</Text>
    //         <TextInput 
    //             style={styles.input}
    //             placeholder={"*********"}
    //             label={"Password"}
    //             onChangeText={newText => setPassword(newText)}
    //         />
    //         <Button title="Submit" onPress={handleSubmit} />  
    //     </View>
    // </Formik>
  )
}

const styles = StyleSheet.create({
 registerForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
 },
 appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  progBarCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'stretch',
    marginTop: 40,
    marginHorizontal: 45,
    height: 10,
    // marginBottom: 200,
    // backgroundColor: 'yellow'
  },
  progBar1: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    borderRadius: 50,
    backgroundColor: '#6856C4',
  },
  progBar2: {
    flex: 1,
    height: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 25,
    paddingLeft: 10,
    borderRadius: 50,
    backgroundColor: '#C9B9FB',
  },
  body: {
    marginHorizontal: 40,
    // paddingBottom: 300,
    // backgroundColor: 'yellow'
},
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 200,
    // backgroundColor: 'orange'
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      height: 45,
      marginHorizontal: 45,
      marginVertical: 10,
      width: 150,
      backgroundColor: '#6750A4',
    },
  buttonText: {
      fontSize: 20,
      fontWeight: 'semibold',
      color: '#fff',
  },
  nameForm: {
    paddingVertical: 40,
  },
  input: {
    alignSelf: 'stretch',
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  formText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    }
});

export default Login