import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '@theme/theme'

import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLabel from '@components/IconLabel';


interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    name?: string,
    clock?: string,
    thumbnail: ImageSourcePropType,
}
const VerticalCourseCard: React.FC<Props> = ({ containerStyle, clock, name, thumbnail }) => {

    return (
        <TouchableOpacity
            style={
                StyleSheet.flatten(
                    [
                        {
                            width: 270,

                        }, containerStyle
                    ]
                )}
        >
            <Image
                source={thumbnail}
                resizeMode='cover'
                style={{
                    width: "100%",
                    height: 150,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.padding
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    width: 45,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: COLORS.primary
                }}>
                    <Ionicons name="play" size={32} />
                </View>

                <View style={{
                    flexShrink: 1,
                    paddingHorizontal: SIZES.radius
                }}>
                    <Text style={{
                        flex: 1,
                        ...FONTS.h4,
                        fontWeight: 'bold',
                        fontSize: 17
                    }}>
                        {name}
                    </Text>
                    <IconLabel clock={clock} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default VerticalCourseCard;

