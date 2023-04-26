import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { UnauthenticatedStackParams } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<UnauthenticatedStackParams, 'Login'>;

const mailIcon:ImageSourcePropType = require('../assets/icons/mail.png');
const lockIcon:ImageSourcePropType = require('../assets/icons/lock.png');

function LoginScreen ({navigation} : LoginScreenProps) : JSX.Element {
  //type
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function signupPressHandler(): void {
    navigation.navigate('Signup');
  }

  function validateInputs(): boolean {
    return email.trim() !== '' && password.trim() !== '';
  }

  return (
    <View>
      <Text style= {styles.welcomeText}>WELCOME</Text>
      <Input myImage={mailIcon} placeholder='Your email' />
      <Input myImage={lockIcon} placeholder='Your password'/>
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
    welcomeText : {
        color : Colors.primary,
        fontSize: 30,
        textAlign : 'center',
        fontWeight : 'bold', 
        marginTop : 183,
        marginBottom: 150
    }
});