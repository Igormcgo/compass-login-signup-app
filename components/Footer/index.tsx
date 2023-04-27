import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './style';

type FooterProps = {
    children : string;
    link : string;
    onPress : () => void;
}

function Footer ({children, link, onPress} : FooterProps) : JSX.Element {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{children}</Text>
                <Pressable style={({ pressed }) =>  pressed && styles.pressed}
                           onPress={onPress}>
                    <Text style={styles.textLink}>{link}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Footer;