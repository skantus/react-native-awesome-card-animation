import React from 'react';
import {Animated} from 'react-native';
import {AnimatedValue} from 'react-navigation';

type Props = {
  isHidden: boolean;
  children: any;
};

const SHOW = 1;
const HIDE = 0;
const START = -4;
const FINISH = 0;
const DURATION = 250;
const opacityValue: AnimatedValue = new Animated.Value(HIDE);
const translateY: AnimatedValue = new Animated.Value(FINISH);

const AnimatedFadeView = (props: Props) => {
  const animate = () => {
    Animated.parallel([
      Animated.timing(opacityValue, {
        toValue: props.isHidden ? HIDE : SHOW,
        duration: DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: props.isHidden ? FINISH : START,
        duration: DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  };

  animate();
  return (
    <Animated.View
      style={[
        {
          opacity: opacityValue,
          transform: [{translateY}],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

export default AnimatedFadeView;
