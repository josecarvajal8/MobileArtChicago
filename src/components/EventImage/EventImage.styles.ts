import {StyleSheet} from 'react-native';
import {colors} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  img: {
    width: 'auto',
    height: 250,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  buttonIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: colors.common_white,
    padding: 8,
    borderRadius: 30,
  },
});
