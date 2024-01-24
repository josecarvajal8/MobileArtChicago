import {StyleSheet} from 'react-native';
import {colors, fontsFam, getFontSizes} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common_white,
    padding: 16,
    gap: 10,
    borderRadius: 10,
  },
  title: {
    ...getFontSizes('title'),
    fontFamily: fontsFam.semibold,
    color: colors.common_black,
  },
  description: {
    ...getFontSizes('body'),
    fontFamily: fontsFam.regular,
    color: colors.common_black,
    textAlign: 'justify',
  },
});
