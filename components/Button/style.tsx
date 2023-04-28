import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    width: 375,
    height: 55,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});
