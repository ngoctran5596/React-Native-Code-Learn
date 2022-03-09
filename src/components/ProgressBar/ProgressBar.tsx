import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '@theme/theme'


interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    progress?: string,
}
const ProgressBar: React.FC<Props> = ({ containerStyle, progress }) => {
    return (
        <View
            style={{
                width: '100%',
                height: 13,
                borderRadius: 10,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    left: 0,
                    height: '100%',
                    width: progress,
                    borderRadius: 10,
                    backgroundColor: COLORS.primary
                }} />
        </View>
    );
};

export default ProgressBar;

