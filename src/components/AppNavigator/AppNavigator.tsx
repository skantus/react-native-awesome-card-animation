import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeContainer from 'src/components/Home';
import ProfileContainer from 'src/components/Profile';
import PhotoDetail from 'src/components/PhotoDetail';
import TabBar from './TabBar';
import {withNavigation, tabIcon} from './utils';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardStyle: {
        backgroundColor: 'white',
      },
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: tabIcon(require('src/images/homeIcon.png'), 'Home'),
      },
    },
    ProfileTab: {
      screen: withNavigation(({navigation}) => (
        <ProfileContainer onGoBack={navigation.goBack} />
      )),
      navigationOptions: {
        tabBarIcon: tabIcon(require('src/images/profileIcon.png'), 'Profile'),
      },
    },
  },
  {
    initialRouteName: 'HomeTab',
    tabBarComponent: TabBar,
  },
);

const ModalStackNavigator = createStackNavigator(
  {
    Tab: {
      screen: TabNavigator,
    },
    PhotoDetail: {
      screen: PhotoDetail,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardStyle: {
        backgroundColor: 'white',
      },
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
);

const MainNavigator = createSwitchNavigator({
  App: {
    screen: ModalStackNavigator,
  },
});

export default createAppContainer(MainNavigator);
