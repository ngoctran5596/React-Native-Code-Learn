import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONTS } from '@theme/theme';
interface Iprops {
    result?: string;
    title?: string;
    containerStyle?: any;
    onPress?: (event: any) => void;
}

const InstructorCard = ({ result, onPress, containerStyle, title }: Iprops) => {


    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                width: '33%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#dfd',
                marginRight: 10,
                height: 90,
                borderRadius: 10,
                ...containerStyle
            }}>
            <Text style={{ ...FONTS.h3 }}>{result}</Text>
            <Text style={{ ...FONTS.h3 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default InstructorCard

