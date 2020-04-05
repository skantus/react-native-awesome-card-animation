import React from 'react';
import {View, Image, Text, ImageURISource} from 'react-native';
import {
  NavigationStackScreenProps,
  NavigationStackProp,
} from 'react-navigation-stack';
import styles from './styles';

export const withNavigation = (
  Component: React.FC<{
    navigation: NavigationStackProp;
    screenProps: NavigationStackScreenProps;
    goBack: () => void;
    params: any;
  }>,
) => ({navigation, screenProps}: NavigationProps) => (
  <Component
    navigation={navigation}
    goBack={navigation.goBack}
    params={navigation.state.params}
    screenProps={screenProps}
  />
);

export const tabIcon = (image: ImageURISource, text?: string) => ({
  tintColor,
}: {
  tintColor: string;
}) => (
  <View style={styles.tabIconContent}>
    <Image source={image} style={[styles.icon, {tintColor}]} />
    <Text style={[styles.text, {color: tintColor}]}>{text}</Text>
  </View>
);
