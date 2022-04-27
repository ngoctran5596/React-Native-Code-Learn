import { AVATAR } from '@assets/images';
import { Line, ProfileProgressBar, ProgressBar, TextButton } from '@components';
import { authActions } from '@store/auth/authClient';
import { themeActions } from '@store/theme/themeClient';
import { COLORS, darkTheme, FONTS, lightTheme, SIZES } from '@theme/theme';
import { ThemeColors } from '@theme/types';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { Image, ScrollView, StyleProp, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';


interface ProfileScreenProps {
  FONTS?: StyleProp<TextStyle>;
  appTheme?: any;
  toggleTheme?: any;
  [key: string]: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ toggleTheme, ...props }) => {

  const dispatch = useAppDispatch();
  const appTheme = useAppSelector((state) => state.appTheme.appTheme);
  const userApp = useAppSelector((state) => state.auth.currentUser);
  function HandlerLogout() {
    dispatch(authActions.logout())
    props?.navigation.popToTop()

  }

  function toggleThemeHandlerSaga() {
    // console.log(appTheme)
    if (appTheme?.name == "light") {
      dispatch(themeActions.darkTheme(darkTheme))
    } else {
      dispatch(themeActions.lightTheme(lightTheme))
    }

  }


  const _renderHeader = () => {
    return (
      <View style={styles.containerIcon}>
        <View style={{ flex: 1 }}>
          <Text style={{...styles.ten,color:appTheme?.textColor}}>{userApp?.name?.toLocaleUpperCase()}</Text>
        </View>
        <Ionicons name="theme-light-dark" size={32} color={appTheme?.textColor} onPress={toggleThemeHandlerSaga} />
      </View>
    )
  }


  const _renderProfileCard = () => {

    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary3
        }}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 80
          }}>
          <Image source={{ uri: userApp?.image }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.white
            }} />

          <Ionicons name="camera" size={32} color={COLORS.white} style={{ position: 'absolute', bottom: -15, left: 25 }} />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            alignItems: 'flex-start'

          }}>
          <Text style={{ color: 'white', ...FONTS.h2 }}>
            By programers
          </Text>
          <Text style={{ color: 'white', ...FONTS.h3 }}>
            Full stack
          </Text>
          <ProgressBar containerStyle={{ marginVertical: 10 }} progress='80%' />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <Text style={{ color: 'white' }}>Over all</Text>
            <Text style={{ color: 'white' }}>58%</Text>
          </View>
          <TextButton containerStyle={{ padding: 10, marginTop: 10, borderRadius: 10 }} labelStyle={{ color: COLORS.primary, fontWeight: 'bold' }} label="+ Become member" />
        </View>
      </View>
    )
  }

  const _renderProfileSection = () => {
    return (
      <View style={styles.containerSection}>
        <ProfileProgressBar theme={appTheme} label="Name" value={userApp?.name} onPress={() => { }} icon="people" />
        <Line />
        <ProfileProgressBar theme={appTheme} label="PassWord" value="Change Pass" onPress={() => { }} icon="lock" />
        <Line />
        <ProfileProgressBar theme={appTheme} label="Email" value={userApp?.email} onPress={() => { }} icon="email" />
        <Line />
        <ProfileProgressBar theme={appTheme} label="Contact number" value={userApp?.contact ? userApp.contact : 'No contact'} onPress={() => { }} icon="contacts" />
        <Line />
      </View>
    )
  }

  const _renderProfileSection2 = () => {
    return (
      <View style={styles.containerSection}>
        <ProfileProgressBar theme={appTheme} value="Page" onPress={() => { }} icon="pages" />
        <Line />
        <ProfileProgressBar theme={appTheme} value="New course Notification" onPress={() => { }} icon="fiber-new" radioButton={true} />
        <Line />
        <ProfileProgressBar theme={appTheme} value="Study Reminder" onPress={() => { }} icon="lock-clock" radioButton={true} />
        <Line />
        <ProfileProgressBar theme={appTheme} value="Logout" onPress={HandlerLogout} icon="lock-clock" />
      </View>
    )
  }

  return (
    <View style={{ ...styles.container, backgroundColor: appTheme?.backgroundColor1 }}>
      {_renderHeader()}

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 150
        }}
      >
        {_renderProfileCard()}
        {_renderProfileSection()}
        {_renderProfileSection2()}
      </ScrollView>
    </View>

  );
};

// function mapStateToProps(state: any) {

//   return {
//     appTheme: state.theme.appTheme,
//     error: state.error
//   }
// }

// function mapDispatchToProps(dispatch: any) {
//   return {
//     toggleTheme: (themeType: any) => { return dispatch(toggleTheme(themeType)) }
//   }

// }

export default ProfileScreen;
