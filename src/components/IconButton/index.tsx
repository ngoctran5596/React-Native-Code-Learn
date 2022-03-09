import { Colors } from '@theme/colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle ,ViewProps,ImageSourcePropType} from 'react-native';
type IconProps = {
    containerStyle?: ViewStyle,
    icon : ImageSourcePropType,
    iconStyle?: any,
    onPress(): void
}
const IconButton = (props:any) => {
    return (
        <TouchableOpacity
            style={{
                ...props.containerStyle,
            }}
            onPress={props.onPress}
        >
            <Image
                source={props.icon}
                resizeMode='contain'
                style={{
                    width:30,
                    height:30,
                    tintColor:Colors.white,
                    ...props.iconStyle
                }}
            />
        </TouchableOpacity>
    )
};

export default IconButton;

