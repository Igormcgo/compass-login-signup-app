import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { StackScreenParams } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SignupScreenProps = NativeStackScreenProps<StackScreenParams, 'Signup'>;

const mailIcon:ImageSourcePropType = require('../assets/icons/mail.png');
const lockIcon:ImageSourcePropType = require('../assets/icons/lock.png');
const userIcon:ImageSourcePropType = require('../assets/icons/user.png');

function SignupScreen ({navigation} : SignupScreenProps) : JSX.Element {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState (false);
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

  function handleUsernameChange(text: string): void {
    if (buttonPressed){  
      if (text.trim() === '') {
        setUsernameValid(false);
      } else {
        setUsernameValid(true);
      }
    }
  }

  function validateInputs(): boolean {    
    setButtonPressed(true);
    return emailValid && passwordValid && usernameValid && toggleCheckBox;
  }

  function signinPressHandler(): void {
    navigation.navigate('Login');
  }

  return (
    <View style= {styles.container}>
      <Text style= {styles.welcomeText}>SIGN UP</Text>
      <Input isPressed={buttonPressed} onChangeText={handleEmailChange} isValid={emailValid} invalidMessage='Please enter a valid email adress' myImage={mailIcon} placeholder='Your email' />
      <Input isPressed={buttonPressed} onChangeText={handleUsernameChange} isValid={usernameValid} invalidMessage='Please enter a valid username' myImage={userIcon} placeholder='username' />
      <Input isPressed={buttonPressed} onChangeText={handlePasswordChange} isValid={passwordValid} invalidMessage='Please enter a valid password' myImage={lockIcon} placeholder='Your password'/>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          style={styles.checkbox}
          color={toggleCheckBox ? Colors.primary : 'white'}
        />
        <Text style={styles.label}>Agree To <Text style={{textDecorationLine : 'underline'}}>Terms And Conditions</Text></Text>
      </View>
      <Button onPress={() => {
              if (validateInputs()) {
                navigation.navigate('Home');}}}>CREATE ACCOUNT</Button>
      <Footer link='Sign in' onPress={signinPressHandler}>Already have an account?</Footer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container : {
      flex : 1
    },
    welcomeText : {
      color : Colors.primary,
      fontSize: 30,
      textAlign : 'center',
      fontWeight : 'bold', 
      marginTop : 72,
      marginBottom: 50
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
      marginHorizontal : 20
    },
    checkbox: {
      marginRight: 10,
    },
    label: {
      fontSize: 14,
      color: 'white',
    },
});