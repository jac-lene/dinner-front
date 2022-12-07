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
import AboutMe from '../components/AboutMe';
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

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ {headerShown: false }}>
        <Stack.Group>
            <Stack.Screen name="SplashScreen" component={Splash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="Verify" component={Verify}/>
            <Stack.Screen name="Choose" component={Choose}/>
        </Stack.Group>
        
        <Stack.Group>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Photos" component={Photos} />
            <Stack.Screen name="Birthday" component={Birthday} />
            <Stack.Screen name="Gender" component={Gender} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="AboutMe" component={AboutMe} />
           
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='ProfVer' component={ProfVerify}/>
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='AllDinners' component={AllDinners}/>
            <Stack.Screen name='OneDinner' component={OneDinner}/>
            <Stack.Screen name='Interested' component={Interested}/>
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen name='Confirmed' component={Confirmed}/>
            <Stack.Screen name='DinnerDetails' component={DinnerDetails}/>
            <Stack.Screen name='Menu' component={Menu}/>
        </Stack.Group>

        <Stack.Screen name='Chat' component={Chat}/>
      </Stack.Navigator>
  )
}

export default StackNavigator