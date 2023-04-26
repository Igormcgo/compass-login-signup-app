import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    button : {
        borderRadius : 30,
        width : 375,
        height : 55,
        backgroundColor : Colors.primary,
        alignItems :'center',
        marginHorizontal : 10,
        marginVertical : 15,
        paddingVertical : 15,
        elevation : 4
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    }
});
