import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackRoutes = {
  MainStack: NavigatorScreenParams<MainStackRoutes>;
  DevStack: undefined;
};

export type MainStackRoutes = {
  BottomTab: undefined;
  Login: undefined;
  Register: undefined;
  Courses: undefined;
  CourseDetail:undefined;
  Instructor:undefined;
  StudentReviews:undefined;
};

export type BottomTabRoutes = {
  Home: undefined;
  Messenger: undefined;
  Notification: undefined;
  Profile: undefined;
  Search: undefined;

};

export type RouteNames =
  | keyof MainStackRoutes
  | keyof RootStackRoutes
  | keyof BottomTabRoutes;

export type DevStackRoutes = {
  DevMenu: undefined;
  CheckUpdate: undefined;
};
