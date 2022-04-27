import { getIconComponent } from '@assets/icons';
import { MOBILE, OPEN_BOOK, ORIGINAL, STAFF_PICK } from '@assets/images';
import { VerticalPopularCourseCard, ClassTypeOption, ClassLevelOption, VerticalCategoriesCard, TextButton } from '@components';
import Text from '@components/Text';
import { goBack } from '@navigation/NavigationServices';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { courseActions } from '@store/courses/courseClient';
import { Colors } from '@theme/colors';
import { COLORS, FONTS, SIZES } from '@theme/theme';
import { useAppSelector } from 'app/hooks';
import { class_level, class_type, courses_list_2, create_within } from 'constants/dummyData';
import * as React from 'react';
import { Alert, Animated, FlatList, Image, Modal, Pressable, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import styles from './styles';





export interface CourseProps {
    route?: any
}

function CourseScreen(props: CourseProps) {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();
    const data: any = useAppSelector((state) => state?.courses?.courses)
    const [isBack, setIsBack] = React.useState(false);
    const IconsSort = getIconComponent('materialIcons');
    const [modalVisible, setModalVisible] = React.useState(false);
    // const [selectedClassType, setSelectedClassType] = React.useState<number>(0);
    const [selectedClassType, setSelectedClassType] = React.useState<number>();
    const [selectedClassLevel, setSelectedClassLevel] = React.useState<number>();
    const [selectedCreateWithin, setselectedCreateWithin] = React.useState<number>();
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const animatedValueHeight = React.useRef(new Animated.Value(0)).current;

    const searchPlaceholderAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 1],
        }),
    };
    const searchHeightAnimation = {
        height: animatedValueHeight.interpolate({
            inputRange: [0, 0],
            outputRange: [0, 60],
        }),
    };

    const _handleOnPress = (item: any) => {
        navigation.navigate('CourseDetail', { selectedCourse: item });
        dispatch(courseActions.addCourse(
            { id: item?.id }
        ))
    }

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
        return data?.map((item: any, index: any) => {
            return (
                <View
                    key={`CourseDetail-_renderFLatlist-${index}`}
                    style={{ paddingHorizontal: SIZES.padding }}
                >
                    <VerticalPopularCourseCard
                        onPress={() => _handleOnPress(item)}
                        id={index}
                        duration={item.duration}
                        instructor={item.instructor?.name}
                        price={item.price}
                        ratings={item.ratings}
                        thumbnail={item.thumbnail} name={item.title} />
                </View>
            )
        })
    }


    function _renderModal() {
        return (

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>Filter</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>

                        </View>
                        <Text style={{ ...FONTS.h3, paddingVertical: 10 }}>Class type</Text>
                        <View style={{ height: 90, flexDirection: 'row' }}>
                            {class_type?.map((item, index) => {
                                return (
                                    <View
                                        key={`Class-type-class_type${item.id}`}

                                    >
                                        <ClassTypeOption
                                            image={item.image}
                                            isSelected={
                                                selectedClassType == item?.id
                                            }
                                            onPress={() => setSelectedClassType(item?.id)}
                                            lable={item.title} />
                                    </View>
                                )
                            })}
                        </View>
                        <Text style={{ ...FONTS.h3, paddingVertical: 5 }}>Class Level</Text>
                        <View style={{ height: 120 }}>
                            {class_level?.map((item, index) => {
                                return (
                                    <View
                                        key={`Class-type-level-${index}`}
                                    >
                                        <ClassLevelOption

                                            isSelected={
                                                selectedClassLevel == item?.id
                                            }
                                            carcontainerStyle={item?.id == 2 ? {} : { borderBottomWidth: 0.5 }}
                                            onPress={() => setSelectedClassLevel(item?.id)}
                                            lable={item.title} />

                                    </View>
                                )
                            })}
                        </View>
                        <Text style={{ ...FONTS.h3, paddingVertical: 10 }}>Created within</Text>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                            {create_within?.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={`Create-within-${item.id}`}
                                        style={{
                                            backgroundColor: item?.id == selectedCreateWithin ? COLORS.primary3 : COLORS.primary,
                                            padding: SIZES.radius,
                                            borderRadius: SIZES.radius,
                                            marginRight: 10,
                                            marginBottom: 10,
                                            height: 50
                                        }}
                                        onPress={() => setselectedCreateWithin(item?.id)}
                                    >
                                        <Text style={{ textAlign: 'justify', justifyContent: 'center', alignItems: 'center' }}>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginTop: 50
                        }}>
                            <TextButton containerStyle={{
                                ...styles.textButton,
                                marginRight: '2%',

                            }} label='Reset' />
                            <TextButton containerStyle={{
                                ...styles.textButton,
                                marginRight: '2%',
                                backgroundColor: COLORS.primary
                            }} label='Save' />
                        </View>


                    </View>
                </View>
            </Modal>

        )
    }


    return (
        <View>

            <Animated.View style={[styles.searchPlaceholder, searchPlaceholderAnimation]}>
                <Ionicons onPress={goBack} name='arrow-back' size={25} color='white' style={{ position: 'absolute', top: 10, left: 10 }} />

            </Animated.View>
            <Animated.ScrollView
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { y: animatedValue },
                            },
                        },
                    ],
                    { useNativeDriver: false },
                )}
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
                    <IconsSort onPress={() => setModalVisible(true)} name="sort" size={35} color={Colors.blueLight} />
                </View>

                {_renderFLatlist()}

            </Animated.ScrollView >
            {_renderModal()}
        </View>
    );
}


export default CourseScreen