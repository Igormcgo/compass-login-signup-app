import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Colors } from './constants/styles';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

//Screens for Unauthenticated Users
function UnauthenticatedStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown : false,
          contentStyle : {backgroundColor : Colors.background }
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <UnauthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}