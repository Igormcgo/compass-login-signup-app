import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';

type LoginScreenProps = {};

const mailIcon = require('../assets/icons/mail.png');
const lockIcon = require('../assets/icons/lock.png');

function LoginScreen () : JSX.Element {
  return (
    <View>
      <Text style= {styles.welcomeText}>WELCOME</Text>
      <Input myImage={mailIcon} placeholder='Your email' />
      <Input myImage={lockIcon} placeholder='Your password'/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    welcomeText : {
        color : Colors.primary,
        fontSize: 30,
        textAlign : 'center',
        fontWeight : 'bold', 
        marginTop : 150,
        marginBottom: 180
    }
});