import React,{useState, useEffect} from 'react';
import { View, Text, Pressable, Keyboard } from 'react-native';
import { styles } from './style';

type FooterProps = {
    children : string;
    link : string;
    onPress : () => void;
}

interface State {
    isKeyboardVisible: boolean;
}

function Footer ({children, link, onPress} : FooterProps) : JSX.Element {
    const [state, setState] = useState<State>({
        isKeyboardVisible: false,
    });

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
        setState({ isKeyboardVisible: true });
    };
    
    const handleKeyboardDidHide = () => {
        setState({ isKeyboardVisible: false });
    };
    
    return(
        <View style={styles.container}>
            {!state.isKeyboardVisible && <View style={styles.textContainer}>
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