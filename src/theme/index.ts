import {DefaultTheme} from '@react-navigation/native';

import {SIZES,FONTS,COLORS,} from './theme';
import {Colors} from './colors';
import {Fonts} from './fonts';

export const useTheme = () => {
  return {
    Colors,
    Fonts,
    SIZES,
    NavigationTheme: {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        ...Colors,
      },
    },
  };
};
