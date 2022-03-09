import { Colors } from '@theme/colors';
import React from 'react';
import Ionicons from 'react-native-vector-icons/AntDesign'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle, ViewProps, ImageSourcePropType } from 'react-native';
const IconLabel = (props: any) => {
    return (
        <View
            style={{ flexDirection: 'row' ,marginTop:10}}
        >
            <Ionicons
               name='clockcircleo'
               size={20}
               style={{ marginRight:10}}
            />
            <Text>{props.clock}</Text>
        </View>
    )
};

export default IconLabel;

