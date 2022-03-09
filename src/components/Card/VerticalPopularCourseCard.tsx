import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '@theme/theme'

import Ionicons from 'react-native-vector-icons/AntDesign';
import IconLabel from '@components/IconLabel';


interface Props {
    containerStyle?: StyleProp<ViewStyle>,
    name?: string,
    clock?: string,
    thumbnail: ImageSourcePropType,
    price?: number,
    instructor?: string,
    duration?: string,
    id?: number,
    ratings?: number,
}
const VerticalPopularCourseCard: React.FC<Props> = ({ containerStyle, price, id, instructor, duration, clock, name, ratings, thumbnail }) => {

    return (
        // <TouchableOpacity key={id}
        //     style={{
        //         width: '100%',
        //         flexDirection: 'column',
        //         paddingHorizontal: SIZES.padding,
        //         ...containerStyle
        //     }}

        // >
        <>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Image
                    source={thumbnail}
                    resizeMode='cover'
                    style={{
                        width: "50%",
                        height: 150,
                        borderRadius: SIZES.padding,
                    }}
                />
                <View style={{ width: '60%', flexDirection: 'column', paddingHorizontal: 15, }}>
                    <Text style={{
                        ...FONTS.h4,
                        fontWeight: 'bold',

                        fontSize: 18
                    }}>
                        {name}
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text>{instructor}</Text>
                        <Ionicons name="clockcircleo" size={15} color="#ccc" style={{ paddingLeft: 10, paddingRight: 4 }} />
                        <Text>
                            {duration} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <Text
                            style={{ fontSize: 20, color: COLORS.primary, fontWeight: 'bold' }}>
                            ${price}
                        </Text>
                        <Ionicons name="star" size={20} color="yellow" style={{ paddingLeft: 10, paddingRight: 4 }} />

                        <Text
                            style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.black, }}>
                            {ratings}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: '100%', marginVertical: 20, borderColor: COLORS.gray10 }}></View>
        </>

        // </TouchableOpacity>

    );
};

export default VerticalPopularCourseCard;

