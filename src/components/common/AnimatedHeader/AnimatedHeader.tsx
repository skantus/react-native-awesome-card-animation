import React from 'react';
import {Animated} from 'react-native';
import {AnimatedValue} from 'react-navigation';
import styles from './styles';

type Props = {
  isHidden: boolean;
};

const HIDE = -270;
const SHOW = -50;
const DURATION = 500;
const translateY: AnimatedValue = new Animated.Value(HIDE);

const AnimatedHeader = ({isHidden}: Props): React.ReactNode => {
  const animate = (): void => {
    Animated.timing(translateY, {
      toValue: isHidden ? HIDE : SHOW,
      useNativeDriver: true,
      duration: DURATION,
    }).start();
  };

  animate();
  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]} />
  );
};

export default AnimatedHeader;
