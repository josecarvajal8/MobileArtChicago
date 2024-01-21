import {StyleSheet} from 'react-native';
import {colors, fontsFam, getFontSizes} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...getFontSizes('display'),
    fontFamily: fontsFam.bold,
    color: colors.common_black,
  },
});
