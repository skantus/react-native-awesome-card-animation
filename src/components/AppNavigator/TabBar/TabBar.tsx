import React from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';
import {NavigationState, AnimatedValue} from 'react-navigation';
import {
  NavigationStackProp,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import style from './styles';

const getActiveRouteState = (route: NavigationState): NavigationState => {
  if (
    !route.routes ||
    route.routes.length === 0 ||
    route.index >= route.routes.length
  ) {
    return route;
  }
  const childActiveRoute = route.routes[route.index] as NavigationState;
  return getActiveRouteState(childActiveRoute);
};

type Props = {
  navigation: NavigationStackProp;
  renderIcon: React.FC<{route: {routeName: string}; tintColor: string}>;
};

const SHOW_ANIMATION = 0;
const HIDE_ANIMATION = 120;
const bounce = new Animated.Value(HIDE_ANIMATION);

const TabBar = (props: Props & NavigationStackScreenProps) => {
  const handleBounce = (toValue: number, toAnimate: AnimatedValue) => {
    Animated.spring(toAnimate, {
      toValue,
      velocity: 1,
      friction: 9,
      useNativeDriver: true,
    }).start();
  };

  const startAnimation = () => {
    const activeRoute = getActiveRouteState(props.navigation.state);
    const routesWithoutTabBar = ['Home'];
    handleBounce(
      routesWithoutTabBar.includes(activeRoute.routeName)
        ? HIDE_ANIMATION
        : SHOW_ANIMATION,
      bounce,
    );
  };

  const handleRouteNavigate = (routeName: string) => {
    props.navigation.navigate(routeName);
  };

  const tabBarButtons = () => {
    const navState = props.navigation.state;
    return (
      <View style={style.tabBar}>
        {navState.routes.map((route: {routeName: string}, idx: number) => {
          const color = navState.index === idx ? 'white' : 'gray';
          return (
            <TouchableOpacity
              onPress={() => handleRouteNavigate(route.routeName)}
              key={route.routeName}>
              {props.renderIcon({route, tintColor: color})}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  startAnimation();
  return (
    <Animated.View
      style={[style.container, {transform: [{translateY: bounce}]}]}>
      {tabBarButtons()}
    </Animated.View>
  );
};

export default TabBar;
