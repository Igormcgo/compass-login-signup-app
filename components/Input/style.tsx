import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.input,
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    width: 375,
    height: 55,
  },
  icon: {
    marginRight: 10,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
    color: Colors.inputPlaceholder,
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: 'red',
  },
  invalidContainer: {
    marginHorizontal: 35,
  },
  invalidText: {
    color: 'red',
    fontSize: 13,
  },
});
