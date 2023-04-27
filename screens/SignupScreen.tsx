import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, ActivityIndicator } from 'react-native';
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
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Home');
    }, 1000);
  }

  function handleEmailChange(text: string): void {
    if (text.trim() === '') {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }

  function handlePasswordChange(text: string): void {
    if (text.trim() === '') {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  }

  function handleUsernameChange(text: string): void {  
      if (text.trim() === '') {
        setUsernameValid(false);
      } else {
        setUsernameValid(true);
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
      {!toggleCheckBox && buttonPressed && <Text style={styles.checkboxErrorMessage}>Please accept the terms</Text>}
      <Button onPress={() => {
              if (validateInputs()) {
                handleClick()}}}
      >{isLoading ? <ActivityIndicator size={'large'} color='white'/> : <Text style={styles.buttonText}>CREATE ACCOUNT</Text>}</Button>
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
    buttonText : {
      textAlign : 'center',
      color : 'white',
      alignSelf : 'center',
    },
    checkboxErrorMessage : {
      color : 'red',
      fontSize : 14,
      marginHorizontal : 35
    }
});