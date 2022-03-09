import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '@theme/theme';

const HeaderFlatList = (props:any) => {
  return (
    <View style={{flexDirection:'row',justifyContent: 'space-between',paddingHorizontal:SIZES.padding,paddingVertical:SIZES.padding}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>{props.name}</Text>
      <TouchableOpacity style={{paddingHorizontal:15,paddingVertical:8,backgroundColor:COLORS.primary2 ,borderRadius:SIZES.radius}}>
        <Text>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderFlatList;