import React, {useEffect, useState} from 'react';
import { View, TextInput, Image, ImageSourcePropType, Text } from 'react-native';
import { Colors } from '../../constants/styles';
import { styles } from './style';

type InputProps = {
    placeholder: string;
    myImage : ImageSourcePropType;
    isValid : boolean;
    invalidMessage : string;
    onChangeText : any;
    isPressed : boolean;
}

function Input({ placeholder, myImage, isValid, invalidMessage, onChangeText, isPressed}: InputProps): JSX.Element {
    const [invalid, setInvalid] = useState(false);
    
    useEffect (() => {
        if(isPressed){
            setInvalid(!isValid);
        }
    }, [isPressed, onChangeText])
    
    return(
        <View>
            <View style={[styles.inputContainer, !isValid && isPressed && styles.invalidInput]}>
                <Image source={myImage} style={styles.icon}/>
                <TextInput onChangeText={onChangeText} style={styles.input} placeholder={placeholder} placeholderTextColor={Colors.inputPlaceholder} />
            </View>
            <View style={styles.invalidContainer}>
            {invalid && 
                <Text style={styles.invalidText}>{invalidMessage}</Text>
            }
            </View>
        </View>
    );
};

export default Input;

