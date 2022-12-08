import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {
    // const [isLoggedIn, setLoggedIn] = useState(false);
    const STORAGE_KEY = '@authTokens';

    // const [authTokens, setAuthTokens] = useState(() => 
    //     AsyncStorage.getItem(STORAGE_KEY)
    //     ? JSON.parse(AsyncStorage.getItem(STORAGE_KEY))
    //     : null
    // )

    // const [user, setUser] = useState(() =>
    //     AsyncStorage.getItem(STORAGE_KEY)
    //     ? jwt_decode(AsyncStorage.getItem(STORAGE_KEY))
    //     : null
    // );
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation()

    const loginUser = async (username, password) => {
        const response = await fetch("https://dinnerapp-backend.herokuapp.com/token/", {
            method: 'POST',
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            navigation().navigate('Profile');
            console.log('Auth: ', user);
        } else {
            alert("Something went wrong!")
        }
    }

    const registerUser = async (username, password, password2) => {
        const response = await fetch("https://dinnerapp-backend.herokuapp.com/register/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "password2": password2
            })
        });
        if (response.status === 201) {
            navigation.navigate('Choose');
            console.log("RESPONSE: ", JSON.stringify(response))
        } else {
            alert("Something went wrong!");
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        AsyncStorage.clear();
        navigation.navigate('Welcome');
    }

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser, 
    };

    useEffect(() => {
        setLoading(true);
        if (authTokens) {
            setUser(jwt_decode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens]);

    if(loading) return (<View><Text>Loading...</Text></View>)

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

