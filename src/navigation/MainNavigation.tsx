import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
