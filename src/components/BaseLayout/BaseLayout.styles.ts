import {StyleSheet} from 'react-native';
import {colors, getFontSizes, fontsFam} from '../../constants/styling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_silver,
    gap: 24,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    ...getFontSizes('headline'),
    fontFamily: fontsFam.semibold,
    color: colors.common_black,
  },
  buttons: {
    padding: 10,
    backgroundColor: colors.common_white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  emptyBox: {
    width: 34,
    height: 34,
  },
  content: {
    paddingHorizontal: 16,
  },
});
