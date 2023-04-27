import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { StackScreenParams } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<StackScreenParams, 'Login'>;

const mailIcon:ImageSourcePropType = require('../assets/icons/mail.png');
const lockIcon:ImageSourcePropType = require('../assets/icons/lock.png');

function LoginScreen ({navigation} : LoginScreenProps) : JSX.Element {
  //type
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleEmailChange(text: string): void {
    if (buttonPressed) {
      if (text.trim() === '') {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }
  }

  function handlePasswordChange(text: string): void {
    if (buttonPressed){  
      if (text.trim() === '') {
        setPasswordValid(false);
      } else {
        setPasswordValid(true);
      }
    }
  }

  function signupPressHandler(): void {
    navigation.navigate('Signup');
  }

  function validateInputs(): boolean {    
    setButtonPressed(true);
    return emailValid && passwordValid;
  }

  return (
    <View style = {styles.container}>
      <Text style= {styles.welcomeText}>WELCOME</Text>
      <Input isPressed={buttonPressed} onChangeText={handleEmailChange} isValid={emailValid} invalidMessage='Please enter a valid email adress' myImage={mailIcon} placeholder='Your email' />
      <Input isPressed={buttonPressed} onChangeText={handlePasswordChange} isValid={passwordValid} invalidMessage='Please enter a valid password' myImage={lockIcon} placeholder='Your password'/>
      <Button onPress={() => {
              if (validateInputs()) {
                navigation.navigate('Home');}}}
      >LOGIN</Button>
      <Footer link='Sign Up' onPress={signupPressHandler}>Don't have an account?</Footer>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1
  },  
  welcomeText : {
    color : Colors.primary,
    fontSize: 30,
    textAlign : 'center',
    fontWeight : 'bold', 
    marginTop : 170,
    marginBottom: 110
  }
});