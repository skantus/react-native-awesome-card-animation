import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeContainer from 'src/components/Home';
import ProfileContainer from 'src/components/Profile';
import TabBar from './TabBar';
import {withNavigation, tabIcon} from './utils';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: withNavigation(() => <HomeContainer />),
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
      screen: ProfileContainer,
      navigationOptions: {
        tabBarIcon: tabIcon(require('src/images/profileIcon.png'), 'Profile'),
      },
    },
  },
  {
    tabBarComponent: TabBar,
  },
);

const MainNavigator = createSwitchNavigator({
  App: {
    screen: TabNavigator,
  },
});

export default createAppContainer(MainNavigator);
