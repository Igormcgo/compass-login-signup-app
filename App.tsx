import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Colors } from './constants/styles';
import { StatusBar } from 'expo-status-bar';

type UnauthenticatedStackParams = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<UnauthenticatedStackParams>();

//Screens for Unauthenticated Users
function UnauthenticatedStack() {
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
      </Stack.Navigator>
  );
};

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <UnauthenticatedStack />
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