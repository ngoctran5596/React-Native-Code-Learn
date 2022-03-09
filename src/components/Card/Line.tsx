import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '@theme/theme';

const Line = () => {
  return (
    <View style={{width:'100%',paddingHorizontal:SIZES.padding}}>
        <View style={{borderBottomWidth:1,borderBottomColor:COLORS.gray20}}/>
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({});
