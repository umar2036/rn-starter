import  React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Sreceens 
// import AccountScreen from "../screens/AccountScreen";
// import SignInScreen from "../screens/SignInScreen";
// import SignUpScreen from "../screens/SignUpScreen";
// import TrackCreateScreen from "../screens/TrackCreateScreen";
// import TrackDetailScreen from "../screens/TrackDetailScreen";
// import TrackListScreen from "../screens/TrackListScreen";
// import { Header } from 'react-native/Libraries/NewAppScreen';

import ComponentScreen from './ComponentScreen';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import WelcomeScreen from './WelcomeScreen';
import ImageScreen from './ImageScreen';
import CounterScreen from './CounterScreen';
import ColorScreen from './ColorScreen';
import SquareScreen from './SquareScreen';
import TextScreen from './TextScreen';
import BoxScreen from './BoxScreen';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;


// const AuthStack =createStackNavigator();
// const TrackStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TrackListStack=()=> {
//     return(
//         <TrackStack.Navigator>
//         <TrackStack.Screen name="TrackListScreen" component={TrackListScreen}  />
//         <TrackStack.Screen name="TrackD" component={TrackDetailScreen} />
//         </TrackStack.Navigator>
//     );
// };

// const NavigationScreen=()=>{
//     const [isSignIn,setIsSignIn]=useState(true);
//     return(
//         <NavigationContainer>
//             {
//                 isSignIn ? (
//                     <>
//                         <AuthStack.Navigator>
//                             <AuthStack.Screen name="SignIn" component={SignInScreen}/>
//                             <AuthStack.Screen name="SignUp" component={SignUpScreen}/>
                            
//                         </AuthStack.Navigator>
//                     </>
//                 ):
//                 (
//                     <>
//                     <Tab.Navigator>
//                         <Tab.Screen name="TrackList" component={TrackListStack} options={{headerShown:false}}/>
//                         <Tab.Screen name="TrackCreate" component={TrackCreateScreen}/>
//                         <Tab.Screen name="AccountScreen" component={AccountScreen}/>                    
//                     </Tab.Navigator>
//                     </>
//                 )
//             }
//         </NavigationContainer>
//     );

// };
// export default NavigationScreen;