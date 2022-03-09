import { TextStyle } from 'react-native';

export interface ThemeFontWeight {
  regular: FontBase;
  bold: FontBase;
}

export type FontBase = {
  fontFamily: string;
  fontWeight: TextStyle['fontWeight'];
};

export interface ThemeColors {
  name: string;
  backgroundColor1: string;
  backgroundColor2: string;
  backgroundColor3: string;
  backgroundColor4: string;
  backgroundColor5: string;
  backgroundColor6: string;
  backgroundColor7: string;
  backgroundColor8: string;
  lineDivider: string;
  borderColor1: string;
  borderColor2: string;
  textColor: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  textColor5: string;
  textColor7: string;
  tintColor: string;
  dotColor1: string;
  dotColor2: string;

  [key: string]: string
};
