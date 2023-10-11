
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailScreen from './src/views/screens/DetailScreen';
import AppScreen from './src/views/screens/AppScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import RegisterScreen from './src/views/screens/RegisterScreen';
import WelcomeScreen from './src/views/screens/welcomSceen';
import Test from './src/components/test.js/test';
import AchatScreen from './src/views/screens/AchatScreen';
import testScreen from './src/components/test.js/test';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
          
        <Stack.Screen name="AppScreen" component={AppScreen} />
        <Stack.Screen name="welcomScreen" component={WelcomeScreen} />
         <Stack.Screen name="RegisterScreen"component={RegisterScreen} /> 
        <Stack.Screen name="testScreen" component={testScreen} />
        <Stack.Screen name="AchatScreen" component={AchatScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;