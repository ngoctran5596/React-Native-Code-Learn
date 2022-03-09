import { COLORS, FONTS } from '@theme/theme';
import React from 'react';
import { GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';


export type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean | null | undefined;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
const ButtonText: React.FC<Props> = (props) => {

  const { containerStyle, disabled, label, labelStyle, onPress } = props
  return (
    <TouchableOpacity

      style={
        StyleSheet.flatten([
          {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          },
          containerStyle
        ])

      }

      disabled={disabled}
      onPress={onPress}
    >
      <Text
        style={StyleSheet.flatten([
          {
            color: COLORS.black,
            ...FONTS.h3,
          },
          labelStyle
        ])}> {label} </Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

