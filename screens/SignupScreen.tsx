import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Colors } from '../constants/styles';
import  Input  from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { UnauthenticatedStackParams } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SignupScreenProps = NativeStackScreenProps<UnauthenticatedStackParams, 'Signup'>;

const mailIcon:ImageSourcePropType = require('../assets/icons/mail.png');
const lockIcon:ImageSourcePropType = require('../assets/icons/lock.png');
const userIcon:ImageSourcePropType = require('../assets/icons/user.png');

function SignupScreen ({navigation} : SignupScreenProps) : JSX.Element {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  function signinPressHandler(): void {
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text style= {styles.welcomeText}>SIGN UP</Text>
      <Input myImage={mailIcon} placeholder='Your email' />
      <Input myImage={userIcon} placeholder='username' />
      <Input myImage={lockIcon} placeholder='Your password'/>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          style={styles.checkbox}
          color={toggleCheckBox ? Colors.primary : 'white'}
        />
        <Text style={styles.label}>Agree To <Text style={{textDecorationLine : 'underline'}}>Terms And Conditions</Text></Text>
      </View>
      <Button onPress={() => {}}>CREATE ACCOUNT</Button>
      <Footer link='Sign in' onPress={signinPressHandler}>Already have an account?</Footer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
    welcomeText : {
      color : Colors.primary,
      fontSize: 30,
      textAlign : 'center',
      fontWeight : 'bold', 
      marginTop : 72,
      marginBottom: 40
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