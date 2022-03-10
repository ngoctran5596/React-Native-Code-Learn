import { CHECK, OPEN_BOOK, UNCHECK } from '@assets/images'
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
  carcontainerStyle?: any,
}

const ClassLevelOption = ({ isSelected, containerStyle, carcontainerStyle, lable, image, onPress }: Props) => {



  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 30,
        ...containerStyle
      }}
      onPress={onPress}

    >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        ...carcontainerStyle
      }}>
        <Text style={{ color: 'black' ,paddingVertical:5}}>{lable}</Text>
        <Image style={{ width: 30, height: 30 }} source={isSelected ? CHECK : UNCHECK} />
      </View>
    </TouchableOpacity>
  )
}

export default ClassLevelOption;