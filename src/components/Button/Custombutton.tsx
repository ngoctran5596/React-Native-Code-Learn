import { getIconComponent } from '@assets/icons';
import Text from '@components/Text';
import { useTheme } from '@theme';
import { ThemeColors } from '@theme/types';
import Helper from '@utils/helpers';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import Block from '../Block';

import { createDefaultStyle, handleGutter, isIcon, isUndefined } from '../utils';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = props => {
  const { Colors } = useTheme();
  const {
    title,
    type = title ? 'primary' : 'text',
    children,
    style,
    width,
    height,
    align,
    justify,
    row,
    position,
    top,
    bottom,
    left,
    detail,
    right,
    padding = title ? 14 : 0,
    margin,
    shadow,
    overflow,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    loading,
    titleProps,
    disabled,
    backgroundColor,
    pressedBackground,
    disabledBackground,
    ...rest
  } = props;

  const buttonStyles = ({ pressed }: { pressed: boolean }) => {
    return StyleSheet.flatten([
      getDefaultButtonStyles({
        type,
        pressed,
        Colors,
        isDisabled: disabled || loading,
        backgroundColor,
        pressedBackground,
        disabledBackground,
      }),
      createDefaultStyle(props),
      width && { width },
      height && { height },
      align && { alignItems: align },
      justify && { justifyContent: justify },
      row && { flexDirection: 'row' },
      position && { position },
      !isUndefined(top) && { top },
      !isUndefined(bottom) && { bottom },
      !isUndefined(left) && { left },
      !isUndefined(right) && { right },
      overflow && { overflow },
      padding && handleGutter('padding', padding),
      margin && handleGutter('margin', margin),
      shadow && styles.shadow,
      style,
    ]);
  };

  const _renderIcon = (isRight?: boolean) => {
    const [icon, iconStyle] = isRight
      ? [rightIcon, rightIconContainerStyle]
      : [leftIcon, leftIconContainerStyle];

    if (isIcon(icon)) {
      const IconComponent = getIconComponent(icon.type);

      return (
        <IconComponent
          style={StyleSheet.flatten([
            {
              paddingRight: isRight || !title ? 0 : 8,
              paddingLeft: isRight ? 8 : 0,
            },
            iconStyle,
          ])}
          name={icon.name}
          size={icon.size || 24}
          color={icon.color || (type === 'primary' ? 'white' : 'primary')}
        />
      );
    }

    return icon;
  };

  return (
    <Pressable {...rest} disabled={disabled || loading} style={buttonStyles}>
      {children ? (
        children
      ) : (
        <Block row alignSelf="center">
          {leftIcon && _renderIcon()}
          {loading && (
            <Block margin={{ right: 8 }}>
              <ActivityIndicator
                color={type === 'primary' ? 'white' : Colors.primary}
                size="small"
              />
            </Block>
          )}
          {title && (
            <Block 
            style={{flexDirection:'column'}}
            
            >


              <Text
                fontType="bold"
                color={type === 'primary' ? 'white' : 'primary'}
                size={14}
                {...titleProps}>
                {detail}
              </Text>
        
              <Text
                fontType="bold"
                color={type === 'primary' ? 'white' : 'primary'}
                size={14}
                {...titleProps}>
                {title}

              </Text>

            </Block>
          )}
          {rightIcon && _renderIcon(true)}
        </Block>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
});

type IProps = {
  type: 'primary' | 'outline' | 'text';
  Colors: ThemeColors;
  pressed: boolean;
  isDisabled?: boolean;
  backgroundColor?: string;
  pressedBackground?: string;
  disabledBackground?: string;
};

const getDefaultButtonStyles = ({
  type,
  Colors,
  pressed,
  isDisabled,
  backgroundColor,
  pressedBackground,
  disabledBackground,
}: IProps) => {
  let buttonDefaultStyle: any = {
    borderRadius: 8,
    backgroundColor: pressed ? Colors.focus : Colors.primary,
  };
  if (type === 'text' || type === 'outline') {
    buttonDefaultStyle.backgroundColor = 'transparent';
    buttonDefaultStyle.opacity = pressed ? 0.6 : 1;
  }
  if (type === 'outline') {
    buttonDefaultStyle.borderColor = Colors.focus;
    buttonDefaultStyle.borderWidth = 1;
  }
  if (isDisabled) {
    if (type === 'primary') {
      buttonDefaultStyle.backgroundColor =
        disabledBackground || Colors.disabled;
    } else {
      buttonDefaultStyle.opacity = 0.6;
    }
  }
  if (backgroundColor) {
    buttonDefaultStyle.backgroundColor =
      Colors[backgroundColor] || backgroundColor;
    if (pressed) {
      buttonDefaultStyle.backgroundColor =
        pressedBackground ||
        Helper.colorLuminance(Colors[backgroundColor] || backgroundColor, -0.1);
    }
  }
  return buttonDefaultStyle;
};
