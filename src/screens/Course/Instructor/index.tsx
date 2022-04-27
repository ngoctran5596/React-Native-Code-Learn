import { AVATAR, BACK, CHECKED, CONFUSED, SAD, SHARE, SHAREProfile, SMILE, SMILEFACE } from '@assets/images'
import { CourseAssessment, IconButton, InstructorCard, Line, LineChar, VerticalPopularCourseCard } from '@components'
import ButtonText from '@components/Button'
import { goBack } from '@navigation/NavigationServices'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES } from '@theme/theme'
import { useAppSelector } from 'app/hooks'
import { courses_list_2 } from 'constants/dummyData'
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import InstructorStudentReview from './Instructor'
import styles from './styles'



type Props = {
  percent?: any;
  route?: any;
}

const Instructor = (props: Props) => {

  const instructorProps = props?.route?.params?.item;

  const dataSelected:any = useAppSelector((state) => state?.courses?.courses)
  // const data = dataSelected?.
  console.log('dataSelected',dataSelected)
  const navigation = useNavigation();
  const propStyle = (percent: any, base_degrees: any) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
      transform: [{ rotateZ: `${rotateBy}deg` }]
    };
  }

  const renderThirdLayer = (percent: any) => {
    if (percent > 50) {
      return (<View style={[styles.secondProgressLayer, propStyle((percent - 50), 45)]}></View>)
    } else {
      return (<View style={styles.offsetLayer}></View>)
    }
  }

  const [LineNumber, setLineNumber] = React.useState(2);
  const percent = 74;
  let firstProgressLayerStyle: any;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }


  const _setLineText = (value: number) => {
    setLineNumber(value)
  }

  const _renderHeader = () => {
    return (
      <View style={styles.header}>
        <IconButton icon={BACK} onPress={() => goBack()} />
        <IconButton icon={SHAREProfile} />
      </View>
    )
  }
  const _renderSection = () => {
    
    return (
      <View>

        <View style={{
          flexDirection: 'row',
          paddingVertical: 10
        }}>

          <InstructorCard result="8.8M" title='Followers' containerStyle={{ backgroundColor: "#fcf3d8" }} />
          <InstructorCard result="1.8M" title='Reviewers' containerStyle={{ backgroundColor: "#ffe1df" }} />
          <InstructorCard result="180M" title='Total Student' containerStyle={{ backgroundColor: "#d8e0ff", marginRight: 20 }} />

        </View>
        <Text style={{ ...FONTS.h2, paddingVertical: 5 }}>About Me</Text>
        <Text numberOfLines={LineNumber} style={{ ...FONTS.body4, fontSize: 16 }}>Hiện tại, mình đang làm tại SwatMobility. Team dev cũng nho nhỏ (tổng cộng tầm 8-10 người), nhưng anh em làm việc rất vui và chuyên nghiệp!

          Kì này, mình sẽ đánh giá những công nghệ mà mình và team đang dùng, điểm mạnh/điểm yếu và những điều mình thích/ghét về chúng nhé.</Text>
        {LineNumber === 2
          ?
          (
            <Text style={styles.textShow} onPress={() => _setLineText(0)} >Show more</Text>
          )
          :
          (
            <Text style={styles.textShow} onPress={() => _setLineText(2)} >Hide</Text>
          )
        }

        <View style={{ width: '100%', paddingVertical: 5, height: 5, borderBottomWidth: 2, borderBottomColor: 'black' }} />

        <Text style={{ ...FONTS.h2, paddingVertical: 5 }}>My Courses</Text>
        {dataSelected?.map((item:any, index:any) => (
          <VerticalPopularCourseCard
            key={`MYCOURSES-${index}`}
            id={index}
            duration={item.duration}
            instructor={item.instructor?.name}
            price={item.price}
            ratings={item.ratings}
            thumbnail={item.thumbnail} 
            name={item.title} />

        ))}
        <Text style={{ ...FONTS.h2, paddingVertical: 5 }}>Student Rating</Text>
        <Shadow >
          <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#ead",
            padding: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginBottom: 10
          }}>
            <View style={styles.containerChar}>
              <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
              {renderThirdLayer(percent)}
              <Text style={styles.display}>{percent}%</Text>

            </View>
            <Text style={{ flex: 1 }}>Student satisfied with courses</Text>
          </View>
        </Shadow>
        <Shadow>
          <View style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#ffff",
            padding: 10,
          }}>

            <View style={{ flexDirection: 'row' }}>
              <LineChar containerStyle={{ width: '45%', backgroundColor: COLORS.primary }} />
              <LineChar containerStyle={{ width: '30%', backgroundColor: COLORS.primary2, marginRight: 5 }} />
              <LineChar containerStyle={{ width: '10%', backgroundColor: COLORS.primary3, marginRight: 5 }} />
              <LineChar containerStyle={{ width: '9%', backgroundColor: COLORS.transparentBlack1, marginRight: 5 }} />
            </View>
            <CourseAssessment icon={SMILE} />
            <View style={{ borderBottomWidth: 2, width: 320, borderBottomColor: COLORS.gray20 }} />
            <CourseAssessment icon={SMILEFACE} />
            <View style={{ borderBottomWidth: 2, width: 320, borderBottomColor: COLORS.gray20 }} />
            <CourseAssessment icon={CONFUSED} />
            <View style={{ borderBottomWidth: 2, width: 320, borderBottomColor: COLORS.gray20 }} />
            <CourseAssessment icon={SAD} />
          </View>
        </Shadow>
      </View>
    )
  }


  const _renderContent = () => {
    return (
      <View style={{height:200}}> 
        <View style={styles.content}>
          <View style={styles.justifyAvatar}>
            <Image style={styles.image} source={{uri:instructorProps.instructor.image}} />
            <Image style={styles.image2} source={CHECKED} />
          </View>
          <View style={styles.title}>
            <Text style={{ color: 'black', ...FONTS.h2 }}>PROGRAMER</Text>
            <Text style={{ color: 'black' }}>Full stack programer</Text>
            <ButtonText label='+Follow'
              containerStyle={{
                borderWidth: 1,
                borderColor: COLORS.primary,
                padding: 5,
                marginVertical: 5,
                borderRadius: 15
              }} />
          </View>

        </View>

      </View>
    )
  }



  return (
    <SafeAreaView style={styles.container}>

      {/* header */}
      {_renderHeader()}
      {/* content */}
      {_renderContent()}
      <ScrollView
        contentContainerStyle={{ backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        }}
      >
        {_renderSection()}
        <InstructorStudentReview/>

      </ScrollView>
    </SafeAreaView>
  )


}

export default Instructor;