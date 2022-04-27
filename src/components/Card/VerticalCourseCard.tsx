import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '@theme/theme'

import Ionicons from 'react-native-vector-icons/Ionicons';
import IconLabel from '@components/IconLabel';
import { Shadow } from 'react-native-shadow-2'
import { urlApi } from '@api/api';


interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    name?: string,
    clock?: string,
    thumbnail?: any,
    id?: any,
}
const VerticalCourseCard: React.FC<Props> = ({ containerStyle, clock, id, name, thumbnail }) => {
    const thumbnail_covered = thumbnail?.replace('http://localhost:3000', urlApi)
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
            <Shadow viewStyle={{width:'100%', height: 150, marginBottom: SIZES.radius,
                       }}>
                <Image
                    source={{ uri: thumbnail_covered }}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: '100%',
                        borderRadius: SIZES.padding
                    }}
                />
            </Shadow>
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

