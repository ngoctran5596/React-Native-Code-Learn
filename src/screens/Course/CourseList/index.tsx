import { getIconComponent } from '@assets/icons';
import { MOBILE } from '@assets/images';
import { VerticalPopularCourseCard } from '@components';
import Text from '@components/Text';
import { goBack } from '@navigation/NavigationServices';
import { Colors } from '@theme/colors';
import { FONTS, SIZES } from '@theme/theme';
import { courses_list_2 } from 'constants/dummyData';
import * as React from 'react';
import { Animated, Image, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




export interface CourseProps {
    route?: any
}

function CourseScreen(props: CourseProps) {


    const [isBack, setIsBack] = React.useState(false);
    const IconsSort = getIconComponent('materialIcons');

    const course = props.route.params

    function _renderHeader() {
        return (
            <Animated.View
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 0,
                    overflow: 'hidden',
                    height: 250,

                }}
            >
                <Animated.Image source={course?.image}
                    // useNativeDriver={true}

                    style={{
                        width: '100%',
                        height: '100%',
                        borderBottomLeftRadius: 60,


                    }} />
                <Ionicons onPress={goBack} name='arrow-back' size={25} color='white' style={{ position: 'absolute', top: 10, left: 10 }} />
                <Text style={{ ...FONTS.h2, position: 'absolute', bottom: 30, left: 40, color: 'white' }}>{course?.nameCourse}</Text>

                <Animated.View style={{ position: 'absolute', width: 150, height: 200, right: 10, bottom: -10 }}>
                    <Image source={MOBILE} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} />
                </Animated.View>
            </Animated.View>
        )
    }
    function _renderFLatlist() {
        return courses_list_2.map((item, index) => {
            return (
                <TouchableOpacity key={index}
                    style={{
                        width: '100%',
                        flexDirection: 'column',
                        paddingHorizontal: SIZES.padding,

                    }}

                >
                    <VerticalPopularCourseCard
                        id={index}
                        duration={item.duration}
                        instructor={item.instructor}
                        price={item.price}
                        ratings={item.ratings}
                        thumbnail={item.thumbnail} name={item.title} />
                </TouchableOpacity>
            )
        })
    }
    return (
        <View>
            {isBack && (
                <View style={{ height: 50, backgroundColor: '#8dc7ad' }}>
                    <Ionicons onPress={goBack} name='arrow-back' size={25} color='white' style={{ position: 'absolute', top: 10, left: 10 }} />

                </View>)}
            <Animated.ScrollView
                onScroll={(e) => e.nativeEvent.contentOffset.y > 250 ? setIsBack(true) : setIsBack(false)}
                scrollEventThrottle={16}

            >
                {/** header */}
                {_renderHeader()}


                {/** center */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}>
                    <Text style={{ ...FONTS.h3 }}>
                        546 result
                    </Text>
                    <IconsSort name="sort" size={35} color={Colors.blueLight} />
                </View>

                {_renderFLatlist()}
            </Animated.ScrollView >
        </View>
    );
}


export default CourseScreen