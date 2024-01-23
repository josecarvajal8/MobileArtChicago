import {StyleSheet} from 'react-native';
import {colors, getFontSizes, fontsFam} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  containerDetail: {
    width: '100%',
    gap: 10,
    position: 'absolute',
    backgroundColor: colors.common_white,
    opacity: 0.7,
    padding: 10,
    bottom: 0,
  },
  title: {
    ...getFontSizes('title'),
    fontFamily: fontsFam.semibold,
    color: colors.primary,
  },
  date: {
    ...getFontSizes('caption'),
    fontFamily: fontsFam.medium,
    color: colors.common_black,
  },
});
