import { SMILE } from '@assets/images'
import { COLORS, FONTS } from '@theme/theme';
import React from 'react'
import { Image, View ,Text} from 'react-native'


type Props = {
  icon?:any;
}

const CourseAssessment = ({icon}: Props) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,

    }}>
      <Image source={icon} style={{width:32,height:32}} />
      <Text style={{ flex: 1, marginLeft: 15 ,...FONTS.h3}}>Very Satisfied</Text>
      <Text style={{}}>585</Text>
    </View>
    )
}

export default CourseAssessment