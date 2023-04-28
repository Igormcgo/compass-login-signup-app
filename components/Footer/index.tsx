import React,{useState, useEffect} from 'react';
import { View, Text, Pressable, Keyboard } from 'react-native';
import { styles } from './style';

type FooterProps = {
    children : string;
    link : string;
    onPress : () => void;
}


function Footer ({children, link, onPress} : FooterProps) : JSX.Element {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState<boolean>(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          handleKeyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          handleKeyboardDidHide
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
    }, []);

    const handleKeyboardDidShow = () => {
        setIsKeyboardVisible(true);
    };
    
    const handleKeyboardDidHide = () => {
        setIsKeyboardVisible(false);
    };
    
    return(
        <View style={styles.container}>
            {!isKeyboardVisible && <View style={styles.textContainer}>
                <Text style={styles.text}>{children}</Text>
                <Pressable style={({ pressed }) =>  pressed && styles.pressed}
                           onPress={onPress}>
                    <Text style={styles.textLink}>{link}</Text>
                </Pressable>
            </View>}
        </View>
    );
}

export default Footer;