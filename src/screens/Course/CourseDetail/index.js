
import { BACK, FAVORITE, PLAY, SHARE } from '@assets/images';
import { IconButton, Line } from '@components';
import { goBack } from '@navigation/NavigationServices';
import { COLORS, FONTS, SIZES } from '@theme/theme';
import { course_detail_tab } from 'constants/dummyData';
import React from 'react';
import { Animated, ImageBackground, TouchableOpacity, View, Text, Keyboard } from 'react-native';
import CourseChapter from './CourseTab/CourseChapter';
import CourseDiscussion from './CourseTab/CourseDiscusstion';
import CourseFile from './CourseTab/CourseFile';
import styles from './styles';


// interface course {
//     id: number;
//     title: string;
//     duration: string;
//     instructor: string;
//     ratings: number;
//     price: number;
//     is_favourite: boolean;
//     thumbnail: any;
// }


// interface Props {
//     selectedCourse?: course,
//     route?: any,
// }

// interface PropsI {
//     measureLayout?: any,
//     scrollX?: any,
// }

const course_detail_tabs = course_detail_tab.map((item) => ({ ...item, ref: React.createRef() }))

const TabIndicator = ({ measureLayout, scrollX }) => {
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
const Tab = ({ scrollX, onTabPress }) => {
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
                flexDirection: 'row',
            }}
        >
            {measureLayout?.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}
            {course_detail_tabs.map((item, index) => {
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

    const [videoSelected, setVideoSelected] = React.useState(false);

    const flatlistRef = React.useRef();
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const onTabPress = React.useCallback(tabIndex => {
        flatlistRef?.current?.scrollToOffset({
            offset: tabIndex * SIZES.width
        })
    })
    function _renderheader() {
        return (
            <View style={styles.header}>
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
            <View style={styles.video}>
                <ImageBackground
                    source={selectedCourse?.thumbnail}
                    style={styles.imageBG}
                >
                    <IconButton icon={PLAY} onPress={() => setVideoSelected(true)} iconStyle={{ width: 50, height: 50 }} />
                </ImageBackground>

            </View>
        );
    }

    function renderContent() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 60 }}>

                    {/**tabIndicator */}
                    {/**tab */}
                    <Tab onTabPress={onTabPress} scrollX={scrollX} />
                    {/**content */}

                </View>
                <Line />
                <Animated.FlatList
                    ref={flatlistRef}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={SIZES.width}
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
                                width: SIZES.width,

                            }}>

                                {index === 0 && <CourseChapter />}
                                {index === 1 && <CourseFile />}
                                {index === 2 && <CourseDiscussion />}
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