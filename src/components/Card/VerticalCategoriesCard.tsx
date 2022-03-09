import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '@theme/theme'

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import IconLabel from '@components/IconLabel';


interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    name?: string,
    clock?: string,
    thumbnail?: any,
    onPress?: () => void,
}
const VerticalCategoriesCard: React.FC<Props> = ({ containerStyle, onPress, clock, name, thumbnail }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                StyleSheet.flatten(
                    [
                        {
                            width: 270,

                        }, containerStyle
                    ]
                )
            }
        >
            <Image
                source={thumbnail}
                resizeMode='cover'
                style={{
                    width: "100%",
                    height: 150,
                    borderRadius: SIZES.padding
                }}
            />

            <Text style={{
                flex: 1,
                ...FONTS.h4,
                position: 'absolute',
                bottom: 40,
                left: 15,
                fontWeight: 'bold',
                fontSize: 20
            }}>
                {name}
            </Text>

        </TouchableOpacity>
    );
};

export default VerticalCategoriesCard;

