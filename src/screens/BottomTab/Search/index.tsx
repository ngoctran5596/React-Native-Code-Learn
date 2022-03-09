import { TextButton, VerticalCategoriesCard } from '@components';
import { COLORS, FONTS, SIZES } from '@theme/theme';
import React from 'react';
import { Animated, FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
// import {Animated} from 'react-native';
// import { Shadow } from 'react-native-shadow-2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { categories, top_searches } from '../../../constants/dummyData';
import styles from './styles';

interface SearchScreenProps { }

const SearchScreen: React.FC<SearchScreenProps> = () => {

  // const scrollViewRef = React.useRef<Animated.ScrollView>(null)

  // const scrollY = useSharedValue(0);

  // const onScroll = useAnimatedScrollHandler((event) => {
  //   scrollY.value = event.contentOffset.y
  // })

  const _renderTopSearches = () => {
    return (
      <View style={{}}>
        <Text style={{
          marginHorizontal: SIZES.padding,
          ...FONTS.h2
        }}>Top Search</Text>
        <FlatList
          horizontal
          data={top_searches}
          listKey='TopSearch'
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.padding
          }}
          keyExtractor={(item) => `TopSearch-${item.id}`}
          renderItem={({ item, index }) => (
            <TextButton
              label={item.label}
              containerStyle={{
                paddingVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight: index === top_searches.length - 1 ? SIZES.padding : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.gray10,
                padding: 0,

              }}

              labelStyle={{
                color: COLORS.gray50,
                ...FONTS.h3
              }}
            />
          )}
        />

      </View>
    )
  }

  const _renderBrowserCategories = () => {
    return (
      <View style={{ marginVertical: SIZES.padding }}>
        <Text style={{
          marginHorizontal: SIZES.padding,
          ...FONTS.h2
        }}>Top Search</Text>

        <FlatList
          data={[1]}
          horizontal
          renderItem={() => {
            return (
              <FlatList
                numColumns={2}
                scrollEnabled={false}
                data={categories}
                keyExtractor={(item) => `browser-${item.id}`}
                renderItem={({ item, index }) => {
                  return (
                    <VerticalCategoriesCard
                      containerStyle={{
                        width: (SIZES.width - (SIZES.padding * 2) - SIZES.radius) / 2,
                        height: 150,
                        marginLeft: (index + 1) % 2 === 0 ? SIZES.radius : SIZES.padding,
                        marginTop: SIZES.padding
                      }}
                      thumbnail={item.thumbnail}
                      name={item.title} />
                  )
                }}
              />

            )
          }}

        />
      </View>
    )

  }

  const _renderSearchBar = () => {

    // const inputRage = [0, 55]
    // const searchBarAnimatedStyle = useAnimatedStyle(() => {
    //   return {
    //     height: interpolate(scrollY.value, inputRage, [55, 0], Extrapolate.CLAMP),
    //     opacity: interpolate(scrollY.value, inputRage, [1, 0], Extrapolate.CLAMP)
    //   }
    // })
    return (
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 0,
          right: 0,
          paddingHorizontal: SIZES.padding,
          height: 50
        }}
      >
        <Shadow>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width - (SIZES.padding * 2),
            paddingHorizontal: SIZES.radius,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius
          }}>
            <Ionicons name="search" size={25} />
            <TextInput style={{ flex: 1, marginLeft: SIZES.base }} value="" placeholder="Search" />
          </View>
        </Shadow>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView
        // ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 200
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode="on-drag"
      // onScroll={onScroll}
      // onScrollEndDrag={}
      >
        {_renderTopSearches()}

        {_renderBrowserCategories()}

      </ScrollView>

      {_renderSearchBar()}
    </View>

  );
};

export default SearchScreen;
