import React from 'react';
import { View, TextInput, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '../constants/styles';

type InputProps = {
    placeholder: string;
    myImage : ImageSourcePropType;
}

function Input({ placeholder, myImage }: InputProps): JSX.Element {
    return(
        <View style={styles.inputContainer}>
            <Image source={myImage} style={styles.icon}/>
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
      width: 30,
      height: 30,
      resizeMode :'contain'
    },
    input: {
      flex: 1,
      fontSize: 16,
      marginLeft: 5,
    },
});