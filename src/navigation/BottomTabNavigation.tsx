import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTab } from '@screens';
import React from 'react';
import { BottomTabRoutes } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@theme/colors';

const BottomTabNav = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {

  return (
    <BottomTabNav.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'people' : 'people';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          borderRadius: 15
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.blueLight,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          backgroundColor: Colors.backgroundDark  ,
          borderRadius: 15,
          height: 70
        }
      })}

    >
      <BottomTabNav.Screen name="Home" component={BottomTab.Home} />
      <BottomTabNav.Screen name="Search" component={BottomTab.Search} />
      <BottomTabNav.Screen name="Profile" component={BottomTab.Profile} />
    </BottomTabNav.Navigator>
  );
};

export default BottomTabNavigation;
