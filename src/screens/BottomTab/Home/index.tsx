import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Alert, FlatList, Image, ImageBackground, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'
import { BG, BOOK } from '@assets/images';
import { SIZES, COLORS, FONTS } from '@theme/theme';
import { HeaderFlatList, TextButton, VerticalPopularCourseCard } from '@components';
import { courses_list_1, categories, courses_list_2 } from '../../../constants/dummyData';
import { VerticalCategoriesCard, VerticalCourseCard } from '@components';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { courseActions } from '@store/courses/courseClient';

interface HomeScreenProps {

}


const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(courseActions.getCourseDetail())
    setRefreshing(false);
  };


  
 

  const dispatch = useAppDispatch();
  const data: any = useAppSelector((state) => state?.courses?.courses);

  const navigation: any = useNavigation()
  React.useEffect(() => {
   
 
    dispatch(courseActions.getCourseDetail())
  
  }, [])

  console.log('data', data)

  const _renderHeader = () => {
    return (
      <View style={styles.containerIcon}>
        <View style={{ flex: 1 }}>
          <Text style={styles.ten}>Hello, everyone</Text>
          <Text style={styles.text}>Welcome  to CodeZ!</Text>
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
        data={data}
        keyExtractor={item => `item._id-VerticalCourseCard${item._id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({ item, index }) => {
          return (
            <View key={`item._id-Vertical-${item?._id}`}>

              <VerticalCourseCard
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                  marginRight: index === courses_list_1.length - 1 ? SIZES.padding : 0
                }}
                thumbnail={item?.thumbnail} name={item?.title} clock={item?.duration} />
            </View>

          )

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
              onPress={() => navigation.navigate('Courses', {
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
      data?.map((item: any, index: any) => {
        return (
          <TouchableOpacity
            key={`item?._id_renderPopularCourse${item._id}`}
            style={{
              paddingHorizontal: SIZES.padding,
            }}
          >
            <VerticalPopularCourseCard
              duration={item?.duration}
              instructor={item?.instructor?.name}
              price={item?.price}
              ratings={item?.ratings}
              thumbnail={item?.thumbnail}
              name={item?.title} />
          </TouchableOpacity>


        )
      })

    )
  }
  return (
    <View style={styles.container}>
      {/**header  */}
      {_renderHeader()}

      {/**content  */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}

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
