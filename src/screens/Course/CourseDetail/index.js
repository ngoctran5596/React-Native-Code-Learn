
import { BACK, FAVORITE, PLAY, SHARE } from '@assets/images';
import { IconButton, Line } from '@components';
import { goBack } from '@navigation/NavigationServices';
import { COLORS, FONTS, SIZES } from '@theme/theme';
import { course_detail_tab } from 'constants/dummyData';
import React from 'react';
import { Animated, ImageBackground, TouchableOpacity, View, Text, Keyboard, ScrollView } from 'react-native';
import CourseChapter from './CourseTab/CourseChapter';
import CourseDiscussion from './CourseTab/CourseDiscusstion';
import CourseFile from './CourseTab/CourseFile';
import styles from './styles';
import YoutubePlayer from "react-native-youtube-iframe";
import { useEffect, useState, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player';
import { urlApi } from '@api/api';
import { useAppSelector } from 'app/hooks';
import { useDispatch } from 'react-redux';
import { videoActions } from '@store/videos/videoClient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const course_detail_tabs = course_detail_tab.map((item) => ({ ...item, ref: React.createRef() }))

const TabIndicator = ({ measureLayout, scrollX, screenInfo }) => {
    const inputRange = course_detail_tabs.map((_, i) => i * SIZES.width);

    const tabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout?.map(measure => measure.width)
    })

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout?.map(measure => measure.x)
    })
    return (
        <Animated.View style={{
            position: 'absolute',
            bottom: 0,
            height: 4,
            width: tabIndicatorWidth,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            transform: [
                {
                    translateX
                }
            ]
        }}>

        </Animated.View>
    )
}
const Tab = ({ scrollX, onTabPress, screenInfo }) => {
    const [measureLayout, setMeasureLayout] = React.useState([]);
    const containerRef = React.useRef();


    React.useEffect(() => {
        let ml = [];
        course_detail_tabs.forEach((course_detail_tab) => {
            course_detail_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    });
                    if (ml.length === course_detail_tabs.length) {
                        setMeasureLayout(ml)
                    }
                }

            )
        })
    }, [containerRef.current])

    return (
        <View
            ref={containerRef}
            style={{
                flex: 1,
                width: screenInfo.width,
                flexDirection: 'row',
            }}
        >
            {
                measureLayout?.length > 0
                && <TabIndicator screenInfo={screenInfo} measureLayout={measureLayout} scrollX={scrollX} />
            }
            {course_detail_tabs?.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={`tab-${index}`}
                        style={{
                            flex: 1,
                            paddingHorizontal: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        ref={item.ref}
                        onPress={() => {
                            Keyboard.dismiss();
                            onTabPress(index);
                        }}
                    >
                        <Text style={{ ...FONTS.h3, fontSize: SIZES.width > 800 ? 18 : 17 }}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const CourseDetail = (props) => {
    const { selectedCourse } = props?.route?.params;
    const user = useAppSelector((state) => state.auth.currentUser);
    const data = useAppSelector((state) => state.courses.courses);
    const itemCourseChapter = data.find((c) => c._id === selectedCourse._id)
    const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));
    const [videoSelected, setVideoSelected] = React.useState(false);
    const [videoPlay, setVideoPlay] = React.useState('');
    const [tokens, setTokens] = React.useState('');
    const [durationPlay, setDurationPlay] = React.useState('');
    const [isPlaying, setIsPlaying] = React.useState()
    const navigation = useNavigation();
    const refVideo = React.useRef().current
    const flatlistRef = React.useRef();
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const thumbnail_split = selectedCourse?.thumbnail?.replace('http://localhost:3000', urlApi)
    const dispatch = useDispatch();


    const getToken = async () => {
        try {
            const value = await AsyncStorage.getItem('access_token')
            if (value !== null) {

                setTokens(JSON.parse(value));
            }
        } catch (e) {
            // error reading value
        }
    }



    React.useEffect(() => {

        const onChange = (res) => {
            setScreenInfo(res.screen);
        };
        getToken();
        Dimensions.addEventListener('change', onChange);
        return () => Dimensions.removeEventListener('change', onChange);
    }, [])

    const onTabPress = React.useCallback(tabIndex => {
        flatlistRef?.current?.scrollToOffset({
            offset: tabIndex * SIZES.width
        })
    })

    const onLoad = (data) => {
        const s = data.duration / 60
        setDurationPlay(s.toFixed(2).replace('.', ' p '));
    };

    const _handleOnPressInstructor = (item) => {
        navigation.navigate('Instructor', { item })
    }

    const _handleOnPressPlay = (item, id) => {
        console.log('item, id', item, id)
        const thumbnail_split = item?.replace('http://localhost:3000', urlApi)
        setVideoPlay(thumbnail_split);
        setIsPlaying(id)
        dispatch(videoActions.postComplete({
            id,
            access_token: tokens
        }))
    }
    function _renderheader() {
        return (
            <View style={{
                ...styles.header,
                position: videoSelected ? 'relative' : 'absolute',
                backgroundColor: videoSelected ? COLORS.gray50 : null,
            }}>
                <View style={{ flex: 1 }}>
                    <IconButton
                        icon={BACK}
                        iconStyle={{ tintColor: 'white' }}
                        onPress={() => goBack()} />
                </View>
                <IconButton icon={FAVORITE} iconStyle={{ tintColor: 'white' }} containerStyle={{ paddingRight: 10 }} />
                <IconButton icon={SHARE} iconStyle={{ tintColor: 'white' }} />
            </View>
        );
    }


    function _renderVideoSection() {
        return (
            <>
                {
                    videoSelected
                        ?
                        (
                            <VideoPlayer
                                ref={refVideo}
                                video={{ uri: videoPlay }}
                                videoWidth={1600}
                                videoHeight={900}
                                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                                showDuration
                                onLoad={onLoad}

                            />
                        )
                        : (
                            <View style={styles.video}>
                                <ImageBackground
                                    source={{ uri: thumbnail_split }}
                                    style={styles.imageBG}
                                >
                                    <IconButton icon={PLAY} onPress={() => setVideoSelected(true)} iconStyle={{ width: 50, height: 50 }} />
                                </ImageBackground>
                            </View>
                        )
                }
            </>

        );
    }

    function renderContent() {
        return (
            <View style={{ flex: 1, width: screenInfo.width }}>
                <View style={{ height: 50, width: screenInfo.width }}>
                    <Tab screenInfo={screenInfo} onTabPress={onTabPress} scrollX={scrollX} />
                </View>
                <Line />
                <Animated.FlatList
                    ref={flatlistRef}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={screenInfo.width}
                    decelerationRate="fast"
                    keyboardDismissMode="on-drag"
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    data={course_detail_tab}
                    onScroll={
                        Animated.event([
                            { nativeEvent: { contentOffset: { x: scrollX } } }
                        ], {
                            useNativeDriver: false
                        })
                    }

                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: screenInfo.width,
                            }}>

                                {index === 0 && <CourseChapter
                                    onPressPlay={_handleOnPressPlay}
                                    is_playing={isPlaying}
                                    user={user}
                                    data={data}
                                    item={itemCourseChapter}
                                    screenInfo={screenInfo}
                                    _handleOnPressInstructor={() => _handleOnPressInstructor(selectedCourse)}
                                />}
                                {index === 1 && <CourseFile screenInfo={screenInfo} />}
                                {index === 2 && <CourseDiscussion screenInfo={screenInfo} />}
                            </View>
                        )
                    }}
                />
            </View>)
    }

    return (
        <View style={styles.container}>
            {_renderheader()}
            {_renderVideoSection()}
            {renderContent()}

        </View>
    )
}

export default CourseDetail