import React from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import {AnimatedValue} from 'react-navigation';
import styles from './styles';

type Props = {
  isHidden: boolean;
  onBackPress: () => void;
};

const SHOW = 1;
const HIDE = 0;
const DURATION = 500;
const AnimatedTouchable: AnimatedValue = Animated.createAnimatedComponent(
  TouchableOpacity,
);
const opacityValue: AnimatedValue = new Animated.Value(0);

const Header = ({isHidden, onBackPress}: Props) => {
  const animate = (): void => {
    Animated.timing(opacityValue, {
      toValue: isHidden ? HIDE : SHOW,
      useNativeDriver: true,
      duration: DURATION,
    }).start();
  };

  animate();
  return (
    <AnimatedTouchable style={{opacity: opacityValue}} onPress={onBackPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Back</Text>
      </View>
    </AnimatedTouchable>
  );
};

export default Header;
