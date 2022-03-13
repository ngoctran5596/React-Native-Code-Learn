import { AVATAR, CHECK, LOCK, PLAY } from '@assets/images'
import { Line, TextButton, VerticalPopularCourseCard } from '@components'
import IconLabel from '@components/IconLabel'
import { COLORS, FONTS, SIZES } from '@theme/theme'
import { courses_list_2, course_details } from 'constants/dummyData'
import React from 'react'
import { View, TouchableOpacity, ScrollView, Text, Image, FlatList } from 'react-native'
import styles from './styles'


type Props = {}

const CourseChapter = (props: Props) => {

    function _renderHeader() {
        return (
            <View style={{
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.h2
                }}>
                    {course_details.title}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.base
                }}>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.gray40
                    }}>
                        {course_details.number_of_students}
                    </Text>
                    <IconLabel clock={course_details.duration} containerStyle={{ marginTop: 0, marginLeft: 10 }} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    alignItems: 'center',
                }}>
                    <Image
                        source={AVATAR}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}
                    />
                    <View style={{
                        flex: 1,
                        marginLeft: SIZES.base,
                        justifyContent: 'center',
                    }}>
                        <Text style={{ ...FONTS.h3, fontSize: 20 }}>{course_details?.instructor?.name}</Text>
                        <Text style={{ ...FONTS.h3 }}>{course_details?.instructor?.title}</Text>
                    </View>
                    <TextButton
                        label="Flow +"
                        containerStyle={{
                            width: 80,
                            height: 35,
                            borderRadius: 20,
                            backgroundColor: COLORS.primary
                        }} />
                </View>
            </View>
        )
    }

    function _renderChapter() {
        return (
            <View style={{}}>
                {
                    course_details?.videos.map((item, index) => {
                        return (
                            <View
                                key={`Video-${index}`}
                                style={{
                                    alignItems: 'center',
                                    height: 70,
                                    backgroundColor: item?.is_playing ? COLORS.additionalColor11 : undefined
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: SIZES.padding,
                                        alignItems: 'center',
                                        height: 70
                                    }}>
                                    <Image
                                        source={item?.is_complete ? CHECK : item?.is_playing ? PLAY : LOCK}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                                        <Text style={{ ...FONTS.h3 }}>{item?.title}</Text>
                                        <Text style={{}}>{item?.duration}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: COLORS.gray30, ...FONTS.body4 }}>{item?.size}</Text>
                                        {/* <Text style={{}}>{item?.duration}</Text> */}

                                    </View>

                                </View>
                                {item?.is_playing && (<View
                                    style={{
                                        position: "absolute",
                                        width: item.progress,
                                        bottom: 0,
                                        height: 5,
                                        left: 0,
                                        backgroundColor: COLORS.primary
                                    }} />)}
                            </View>)
                    })
                }
            </View>
        )
    }

    function _renderPopularCourse() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.popularCourse}>
                        Popular Courses
                    </Text>
                    <TextButton
                        labelStyle={{ backgroundColor: COLORS.primary, padding: 5, borderRadius: 15 }}
                        label='see all'
                    />

                </View>
                <FlatList
                    data={courses_list_2}
                    keyExtractor={(item: any) => `Coulist2-${item.id}`}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        paddingHorizontal:SIZES.padding,
                        paddingVertical:SIZES.padding
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalPopularCourseCard
                            id={index}
                            duration={item.duration}
                            instructor={item.instructor}
                            price={item.price}
                            ratings={item.ratings}
                            thumbnail={item.thumbnail} name={item.title} />
                    )}
                />
            </View>
        )
    }

    return (
        <ScrollView>
            {/**header */}
            {_renderHeader()}
            {/**line */}
            <Line containerStyle={{ paddingVertical: 10 }} />
            {/**chapter */}
            {_renderChapter()}
            {/**populate */}
            <Line containerStyle={{ paddingVertical: 10 }} />
            {_renderPopularCourse()}
        </ScrollView>
    )
}

export default CourseChapter