import {StyleSheet} from 'react-native';
import {colors, fontsFam, getFontSizes} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  date: {
    ...getFontSizes('title'),
    fontFamily: fontsFam.semibold,
    color: colors.common_black,
  },
  location: {
    ...getFontSizes('body'),
    fontFamily: fontsFam.medium,
    color: colors.primary,
  },
});
