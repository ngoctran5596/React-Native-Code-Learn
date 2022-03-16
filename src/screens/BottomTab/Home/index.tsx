import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Alert, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
import { BG, BOOK } from '@assets/images';
import { SIZES, COLORS, FONTS } from '@theme/theme';
import { HeaderFlatList, TextButton, VerticalPopularCourseCard } from '@components';
import { courses_list_1, categories, courses_list_2 } from '../../../constants/dummyData';
import { VerticalCategoriesCard, VerticalCourseCard } from '@components';
import CityApi from '../../../api/CityApi';
import { useNavigation } from '@react-navigation/native';

interface HomeScreenProps { }

const HomeScreen: React.FC<HomeScreenProps> = () => {

  const navigation: any = useNavigation()
  React.useEffect(() => {
    CityApi.getAll().then((response) => console.log(response));
  })
  const _renderHeader = () => {
    return (
      <View style={styles.containerIcon}>
        <View style={{ flex: 1 }}>
          <Text style={styles.ten}>Hello, everyone</Text>
          <Text style={styles.text}>Chào mừng anh em nhé!</Text>
        </View>
        <Ionicons name="notifications-outline" size={32} color="black" onPress={() => Alert.alert('ok')} />
      </View>
    )
  }

  const _renderStartLearning = () => {
    return (
      <ImageBackground
        source={BG}
        style={{
          alignItems: 'flex-start',
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          padding: 15,

        }}
        imageStyle={{ borderRadius: 15 }}
      >
        {/**info */}
        <View>
          <Text style={{
            color: COLORS.white,
            ...FONTS.body2
          }}>
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,

            }}>
            Make your brand more visible to others
          </Text>
          <Text>
            By now
          </Text>
        </View>
        {/**Image */}
        <Image source={BOOK} style={{
          width: '100%',
          height: 100,
          resizeMode: 'contain'
        }} />
        {/**Button */}
        <TextButton
          label="Start learning"
          containerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.white,
            borderRadius: 15
          }} />
      </ImageBackground>
    )
  }

  const _renderCourse = () => {
    return (
      <FlatList
        horizontal
        data={courses_list_1}
        listKey='Course'
        keyExtractor={item => `Course-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({ item, index }) => {
          return (
            <VerticalCourseCard
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight: index === courses_list_1.length - 1 ? SIZES.padding : 0
              }}
              thumbnail={item.thumbnail} name={item.title} clock={item.duration} />)

        }}
      />
    )
  }


  const _renderCategories = () => {
    return (
      <FlatList
        horizontal
        data={categories}
        listKey='Categories'
        keyExtractor={item => `Course-${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <VerticalCategoriesCard
              onPress={() => navigation.navigate('Courses',{
                nameCourse: item.title,
                image: item.thumbnail
              })}
              containerStyle={{
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight: index === courses_list_1.length - 1 ? SIZES.padding : 0
              }}
              thumbnail={item.thumbnail} name={item.title} />)

        }}
      />
    )
  }

  const _renderPopularCourse = () => {
    return (
      courses_list_2.map((item, index) => {
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
      // <FlatList
      //   data={courses_list_2}
      //   listKey='Popular Course'
      //   keyExtractor={item => `Course-${item.id}`}
      //   showsHorizontalScrollIndicator={false}
      //   scrollEnabled={false}
      //   contentContainerStyle={{
      //     marginTop: SIZES.padding,
      //   }}
      //   renderItem={({ item, index }) => {
      //     return (
      //       <VerticalPopularCourseCard
      //         duration={item.duration}
      //         instructor={item.instructor}
      //         price={item.price}
      //         ratings={item.ratings}
      //         thumbnail={item.thumbnail} name={item.title} />)

      //   }}
      // />
    )
  }
  return (
    <View style={styles.container}>
      {/**header  */}
      {_renderHeader()}

      {/**content  */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 90
        }}
        showsVerticalScrollIndicator={false}
      >

        {/* Start Learning*/}
        {_renderStartLearning()}

        {/* Start Learning*/}
        {_renderCourse()}
        <View style={{ borderBottomWidth: 1, width: '100%', marginTop: 20, borderColor: COLORS.gray10 }}></View>
        {/* Start Learning*/}
        <HeaderFlatList name="Categories" />
        {_renderCategories()}
        <HeaderFlatList name="Popular Course" />
        {_renderPopularCourse()}
      </ScrollView>
    </View>

  );
};

export default HomeScreen;
