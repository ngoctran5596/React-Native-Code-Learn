import React from 'react'
import { AVATAR, BACK, CHAT, CHECK, FACEBOOK, SHARE } from '@assets/images'
import { IconButton, Line } from '@components'
import ButtonText from '@components/Button'
import { COLORS, SIZES } from '@theme/theme'
import { students_review } from 'constants/dummyData'
import { View, Text } from 'react-native'
import { FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles'
import { goBack } from '@navigation/NavigationServices'


type Props = {}

const InstructorStudentReview = (props: Props) => {

  const _renderHeader = () => {
    return (
      <View style={styles.header}>
        <IconButton icon={BACK} onPress={() => goBack()} />
        <IconButton icon={SHARE} />
      </View>
    )
  }



  const _renderContent = () => {
    return (
      <View style={styles.content}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.text}>Student Review</Text>
          <ButtonText label='+ See all'
            containerStyle={{

              backgroundColor: COLORS.primary,
              padding: 0,
              borderRadius: 15
            }} />
        </View>
        <FlatList
          data={students_review}
          contentContainerStyle={{
            height: 200,
            paddingTop: 10
          }}
          horizontal
          keyExtractor={(item, index) => `review-${index}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  width: 270,
                  backgroundColor: COLORS.primary2,
                  borderRadius: SIZES.padding,
                  padding: 15,
                  height: 200,
                  flexDirection: 'row'
                }}>
                <Image source={item.avatar} style={{ width: 60, height: 60, borderRadius: 30 }} />
                <Text style={{ paddingHorizontal: 15, marginRight: 30 }}>{item.message}</Text>
              </TouchableOpacity>
            )
          }}
        />
        <View style={{ width: '100%', paddingVertical: 10, height: 5, borderBottomWidth: 2, borderBottomColor: 'black' }} />
        <Text style={styles.text}>Connect here</Text>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            borderRadius: 15,
            alignItems: 'center',
            backgroundColor: "#eaf6ff",
            justifyContent: 'center'
          }}>
          <Image source={FACEBOOK} style={{ width: 40, height: 40 }} />
          <Text style={{ flex: 1, textAlignVertical: 'center' }}>FACEBOOK</Text>
          <MaterialIcons size={32} name='navigate-next' color='black' style={{ padding: 10 }} />
        </View>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            backgroundColor: "#eaf6ff",
            borderRadius: 15,
            justifyContent: 'center'
          }}>
          <Image source={FACEBOOK} style={{ width: 40, height: 40 }} />
          <Text style={{ flex: 1 }}>FACEBOOK</Text>
          <MaterialIcons size={32} name='navigate-next' color='black' style={{ padding: 10 }} />
        </View>
      </View>
    )
  }



  return (
    <>

      <View style={styles.content}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.text}>Student Review</Text>
          <ButtonText label='+ See all'
            containerStyle={{
              backgroundColor: COLORS.primary,
              padding: 0,
              borderRadius: 15
            }} />
        </View>
        <View style={{ height: 210}}>

          <FlatList
            data={students_review}
            contentContainerStyle={{
              paddingTop: 10
            }}
            horizontal
            keyExtractor={(item, index) => `review-${index}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    width: 270,
                    backgroundColor: COLORS.primary2,
                    borderRadius: SIZES.padding,
                    padding: 15,
                    height: 200,
                    flexDirection: 'row'
                  }}>
                  <Image source={item.avatar} style={{ width: 60, height: 60, borderRadius: 30 }} />
                  <Text style={{ paddingHorizontal: 15, marginRight: 30 }}>{item.message}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={{ width: '100%', paddingVertical: 10, height: 5, borderBottomWidth: 2, borderBottomColor: 'black' }} />
        <Text style={styles.text}>Connect here</Text>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            borderRadius: 15,
            alignItems: 'center',
            backgroundColor: "#eaf6ff",
            justifyContent: 'center'
          }}>
          <Image source={FACEBOOK} style={{ width: 40, height: 40 }} />
          <Text style={{ flex: 1, textAlignVertical: 'center' }}>FACEBOOK</Text>
          <MaterialIcons size={32} name='navigate-next' color='black' style={{ padding: 10 }} />
        </View>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
            backgroundColor: "#eaf6ff",
            borderRadius: 15,
            justifyContent: 'center'
          }}>
          <Image source={FACEBOOK} style={{ width: 40, height: 40 }} />
          <Text style={{ flex: 1 }}>FACEBOOK</Text>
          <MaterialIcons size={32} name='navigate-next' color='black' style={{ padding: 10 }} />
        </View>
      </View>


    </>
  )
}

export default InstructorStudentReview;