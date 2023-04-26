import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.input,
      borderRadius: 30,
      marginHorizontal: 10,
      marginVertical: 10,
      paddingHorizontal: 10,
      width : 375,
      height : 55
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