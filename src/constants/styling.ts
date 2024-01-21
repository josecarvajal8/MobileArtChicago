export enum colors {
  primary = '#105D5D',
  secondary = '#639BB9',
  dark_silver = '#474E57',
  neutral_silver = '#ACAEB1',
  light_silver = '#EBEBEC',
  common_black = '#070C13',
  common_white = '#FFFFFF',
  accent_mustard = '#918760',
}

export enum fontsFam {
  medium = 'Montserrat-Medium',
  regular = 'Montserrat-Regular',
  semibold = 'Montserrat-Semibold',
  bold = 'Montserrat-Bold',
  extraBold = 'Montserrat-ExtraBold',
}

export const getFontSizes = (
  value: 'body' | 'title' | 'headline' | 'display' | 'caption',
): {fontSize: number; lineHeight: number} => {
  const sizeValue: {[key: string]: {fontSize: number; lineHeight: number}} = {
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 18,
      lineHeight: 28,
    },
    headline: {
      fontSize: 24,
      lineHeight: 32,
    },
    display: {
      fontSize: 36,
      lineHeight: 44,
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
    },
  };
  return sizeValue[value];
};
