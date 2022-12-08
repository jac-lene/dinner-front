import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/Welcome';
import SignUp from '../components/SignUp';
import Phone from '../components/Phone';
import Verify from '../components/Verify';
import Choose from '../components/Choose';
import Photos from '../components/Photos';
import Birthday from '../components/Birthday';
import Gender from '../components/Gender';
import Location from '../components/Location';
import Profile from '../components/Profile';
import ProfVerify from '../components/ProfVerify';
import AllDinners from '../components/AllDinners';
import OneDinner from '../components/OneDinner';
import Interested from '../components/Interested';
import Confirmed from '../components/Confirmed';
import DinnerDetails from '../components/DinnerDetails';
import Menu from '../components/Menu';
import Chat from '../components/Chat';
import Splash from '../components/Splash';
import Name from '../components/Name';
import Register from '../components/Register';
import Login from '../components/Login';
import SplashREAL from '../components/SplashREAL';
import NavBar from '../components/NavBar';
import NewProfile from '../components/NewProfile';
import ProfileView from '../components/ProfileView';
import Messages from '../components/Messages';
import Calendar from '../components/Calendar';

const Stack = createNativeStackNavigator();

const StackNavigator = ( props ) => {
  return (
    <Stack.Navigator screenOptions={ {headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashREAL} />

        <Stack.Group>
            <Stack.Screen name="Start" component={Splash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="Verify" component={Verify}/>
        </Stack.Group>
        
        <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Choose" component={Choose}/>
            <Stack.Screen name="NewProfile" component={NewProfile} />
            <Stack.Screen name="Name" component={Name}/>
            <Stack.Screen name="Photos" component={Photos} />
            <Stack.Screen name="Birthday" component={Birthday} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Group>


        <Stack.Group>
     <Stack.Screen name='AllDinners' navbar={props.navbar} component={AllDinners}/>
       
            <Stack.Screen name='OneDinner' component={OneDinner}/>
            <Stack.Screen name='Interested' component={Interested}/>
        </Stack.Group>

        <Stack.Group>
            <Stack.Screen name='Confirmed' component={Confirmed}/>
            <Stack.Screen name='DinnerDetails' component={DinnerDetails}/>
            <Stack.Screen name='Chat' component={Chat}/>
            <Stack.Screen name='Messages' component={Messages} />
        </Stack.Group>

        <Stack.Screen name='ProfileView' component={ProfileView}/>
        <Stack.Screen name='Calendar' component={Calendar}/>

       

      </Stack.Navigator>
  )
}

export default StackNavigator