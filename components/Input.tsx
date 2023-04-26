import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

type InputProps = {
    icon: any;
    placeholder: string;
}

function Input({ icon, placeholder }: InputProps): JSX.Element {
    return(
        <View style={styles.inputContainer}>
            <Ionicons name={icon} color={Colors.primary} size={25} style={styles.icon}/>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={Colors.inputPlaceholder} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.input,
      borderRadius: 30,
      marginHorizontal: 20,
      marginVertical: 10,
      paddingHorizontal: 10,
      height: 50,
      
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      marginLeft: 5,
    },
});