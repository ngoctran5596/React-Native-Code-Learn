import { OPEN_BOOK } from '@assets/images'
import Text from '@components/Text'
import { COLORS, SIZES } from '@theme/theme'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

interface Props {
  isSelected?: any,
  containerStyle?: any,
  lable?: any,
  onPress?: any,
  image?: any,
}

const ClassTypeOption = (
  {
    isSelected,
    containerStyle,
    lable,
    image,
    onPress
  }: Props) => {

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 90,
        alignItems: 'center',
        padding: SIZES.radius,
        marginRight: 10,
        borderRadius: SIZES.radius,
        backgroundColor: isSelected ? COLORS.primary3 : COLORS.primary,
        ...containerStyle
      }}
      onPress={onPress}
    >
      <Image style={{ width: 50, height: 50, }} source={image} />
      <Text style={{ color: '#ffffff', padding: 5 }}>{lable}</Text>
    </TouchableOpacity>
  )
}

export default ClassTypeOption;