import { AVATAR, CHECK, LOCK, PLAY } from '@assets/images'
import { Line, TextButton, VerticalPopularCourseCard } from '@components'
import IconLabel from '@components/IconLabel'
import { COLORS, FONTS, SIZES } from '@theme/theme'
import { useAppSelector } from 'app/hooks'
import { courses_list_2, course_details } from 'constants/dummyData'
import React from 'react'
import { View, TouchableOpacity, ScrollView, Text, Image, FlatList, GestureResponderEvent } from 'react-native'
import styles from './styles'


type Props = {
    screenInfo?: any,
    _handleOnPressInstructor?: ((event: GestureResponderEvent) => void) | undefined,
    route?: any,
    item?: any,
    onPressPlay?: any,
    duration?: string,
    is_playing?: any,
    data?: any,
    user?: any,
}

const CourseChapter = (props: Props) => {
    const { screenInfo, user, _handleOnPressInstructor, item, onPressPlay, data, is_playing } = props;

    function _renderHeader() {
        return (
            <View style={{
                width: screenInfo.width,
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.h2
                }}>
                    {item.title}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.base
                }}>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.gray40
                    }}>
                        {0}
                    </Text>
                    <IconLabel clock={course_details.duration} containerStyle={{ marginTop: 0, marginLeft: 10 }} />
                </View>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    width: screenInfo.width
                }}

                    onPress={_handleOnPressInstructor}
                >
                    <Image
                        source={{ uri: item.instructor.image }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            marginRight: 10
                        }}
                    />
                    <View style={{
                        justifyContent: 'center',
                        width: screenInfo.width < 700 ? '55%' : '68%'
                    }}>
                        <Text style={{ ...FONTS.h3, fontSize: 20 }}>{item?.instructor?.name}</Text>
                        <Text style={{ ...FONTS.h3 }}>{item?.instructor?.email}</Text>
                    </View>
                    <View style={{

                    }}>
                        <TextButton
                            label="Flow +"
                            containerStyle={{
                                width: 80,
                                height: 35,
                                borderRadius: 20,
                                backgroundColor: COLORS.primary,

                            }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function _renderChapter() {
        return (
            <View style={{ width: screenInfo.width < 700 ? screenInfo.width : screenInfo.width - 50 }}>
                {
                    item?.videos.map((item: any, index: any) => {

                        const check_is_play = item?._id === is_playing;

                        return (
                            <TouchableOpacity
                                key={`Video-course-${index}`}
                                onPress={() => {
                                    onPressPlay(item?.source, item?._id)
                                }}
                                style={{
                                    alignItems: 'center',
                                    height: 70,
                                    backgroundColor: check_is_play ? COLORS.additionalColor11 : undefined
                                }}


                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: SIZES.padding,
                                        alignItems: 'center',
                                        height: 70
                                    }}>
                                    <Image
                                        source={check_is_play ? PLAY : (item?.is_complete?.find((i:any) => i === user.id)) ? CHECK : LOCK}
                                        style={{ width: 30, height: 30 }}
                                    />
                                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                                        <Text style={{ ...FONTS.h3 }}>{item?.title}</Text>
                                        <Text style={{}}>{item?.duration}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: COLORS.gray30, ...FONTS.body4 }}>{item?.size} Mb</Text>


                                    </View>

                                </View>
                                {check_is_play && (<View
                                    style={{
                                        position: "absolute",
                                        width: '100%',
                                        bottom: 0,
                                        height: 5,
                                        left: 0,
                                        backgroundColor: COLORS.primary
                                    }} />)}
                            </TouchableOpacity>)
                    })
                }
            </View>
        )
    }

    function _renderPopularCourse() {
        return (
            <View style={{ flex: 1, width: screenInfo.width, }}>
                <View style={{ ...styles.container, width: screenInfo.width < 700 ? screenInfo.width : '93%' }}>
                    <Text style={styles.popularCourse}>
                        Popular Courses
                    </Text>
                    <TextButton
                        labelStyle={{ backgroundColor: COLORS.primary, padding: 5, borderRadius: 15 }}
                        label='see all'
                    />

                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item: any) => `Coulist2-${item._id}`}
                    scrollEnabled={false}
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding,
                        paddingVertical: SIZES.padding
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalPopularCourseCard
                            id={index}
                            duration={item.duration}
                            instructor={item.instructor?.name}
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