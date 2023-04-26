import React from 'react';
import { View, TextInput, Image, ImageSourcePropType } from 'react-native';
import { Colors } from '../../constants/styles';
import { styles } from './style';

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

