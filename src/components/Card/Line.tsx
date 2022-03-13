import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '@theme/theme';

interface Props {
  containerStyle?: any;
}

const Line = ({ containerStyle }: Props) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: SIZES.padding, ...containerStyle }}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.gray20 }} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({});
