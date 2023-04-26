import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';

type LoginScreenProps = {};

const mailIcon:ImageSourcePropType = require('../assets/icons/mail.png');
const lockIcon:ImageSourcePropType = require('../assets/icons/lock.png');

function LoginScreen () : JSX.Element {
  const navigation = useNavigation(); //needs type
  
  function signupPressHandler(): void {
    navigation.navigate('Signup');
  }

  return (
    <View>
      <Text style= {styles.welcomeText}>WELCOME</Text>
      <Input myImage={mailIcon} placeholder='Your email' />
      <Input myImage={lockIcon} placeholder='Your password'/>
      <Button onPress={() => {}}>LOGIN</Button>
      <Footer link='Sign Up' onPress={signupPressHandler}>Don't have an account?</Footer>
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
        marginBottom: 170
    }
});