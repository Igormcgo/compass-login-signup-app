import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './style';

type ButtonProps = {
    children : any;
    onPress : () => void;
}

function Button ({children, onPress} : ButtonProps) : JSX.Element {
    return(
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}
                   onPress={onPress}>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
}

export default Button;
