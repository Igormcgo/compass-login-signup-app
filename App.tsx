import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen'
import { Colors } from './constants/styles';
import { StatusBar } from 'expo-status-bar';

export type StackScreenParams = {
  Login: undefined;
  Signup: undefined;
  Home : undefined;
};

const Stack = createNativeStackNavigator<StackScreenParams>();

//Screens for Unauthenticated Users
function StackScreen() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown : false,
          contentStyle : {backgroundColor : Colors.background }
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary,
          headerShown : true
        }} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
  );
};

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}