import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    textContainer: {
        borderTopWidth : 0.5,
        borderColor : Colors.primary,
        alignItems : 'center',
        flexDirection: 'row',
        justifyContent : 'center'
    },
    text : {
        fontSize : 14,
        textAlign : 'center',
        color : 'white',
        marginVertical: 10,
        marginRight : 10
    },
    pressed : {
        opacity : 0.75
    },
    textLink : {
        color : Colors.primary,
        fontWeight : 'bold'
    }
});