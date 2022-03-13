import { PDF } from '@assets/images'
import { IconButton, TextButton } from '@components'
import { COLORS, FONTS, SIZES } from '@theme/theme'
import { course_details } from 'constants/dummyData'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'


type Props = {}

const CourseFile = (props: Props) => {


    function _renderStudent() {
        let students = []
        if (course_details?.students?.length > 3) {
            students = course_details.students.slice(0, 3)
        } else {
            students = course_details?.students
        }

        return (
            <View>
                {/* students */}
                <Text style={{ ...FONTS.h2, fontSize: 25 }}>Students</Text>
                <View style={{ alignItems: 'center', marginTop: SIZES.radius, flexDirection: 'row' }}>
                    {students.map((item, index) => {
                        return (
                            <View key={`student-${index}`} style={{ marginLeft: index > 0 ? 10 : 0 }}>
                                <Image style={{ height: 80, width: 80 }} source={item?.thumbnail} />
                            </View>
                        )
                    })}
                    {course_details?.students?.length > 3 && <TextButton labelStyle={{ color: COLORS.primary, marginLeft: 5 }} label='View all' />}
                </View>
            </View>
        )

    }
    function _renderFile() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.h2, fontSize: 25, paddingTop: SIZES.padding }}>File</Text>

                {course_details?.files?.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={`File-${index}`}
                            style={{
                                flexDirection: 'row',
                                marginTop: 10
                            }}
                        >

                            <Image
                                source={item.thumbnail}
                                style={{ width: 80, height: 80 }}
                            />
                            <View style={{  paddingLeft: 10 }}>
                                <Text style={{ ...FONTS.h3, fontSize: 18 }}>{item.name}</Text>
                                <Text style={{ ...FONTS.h5 }}>{item.author}</Text>
                                <Text>{item.upload_date}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}



            </View>
        )
    }



    return (
        <ScrollView
         contentContainerStyle={{ padding: SIZES.padding}}>
            {/**header */}
            {_renderStudent()}
            {/**line */}
            {_renderFile()}

        </ScrollView >
    )
}

export default CourseFile