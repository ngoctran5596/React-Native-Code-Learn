import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Course, Login } from '@screens';
import React from 'react';
import { Alert, Button } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import { MainStackRoutes } from './types';
// import { CourseList } from '@screens/Course';

const MainStack = createNativeStackNavigator<MainStackRoutes>();

const MainStackNavigation = () => {

  return (
    <MainStack.Navigator
      initialRouteName='BottomTab'
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'papayawhip' },
        headerRight: () => (
          <Button
            onPress={() => Alert.alert('This is a button!')}
            title="Info"
            color="#ccc"
          />
        )
      }}
    >
      <MainStack.Screen
        name="BottomTab"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={Login.Login}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Register"
        component={Login.Register}
        options={{
          headerShown: false,
        }}
      />
       <MainStack.Screen
        name="Courses"
        component={Course.CourseList}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
