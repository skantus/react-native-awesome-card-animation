import React from 'react';
import {TouchableOpacity, Text, ImageBackground} from 'react-native';
import {ScaleAndOpacity} from 'react-native-motion';
import styles from './styles';

type Props = {
  isHidden: boolean;
  item: {
    title: string;
    description: string;
    imageUri: string;
  };
  animateOnDidMount?: boolean;
  onPress: (arg0: Card, arg1: boolean) => void;
};

const Card = (props: Props) => {
  const onPressed = (event: any) => {
    const {onPress, item} = props;
    onPress(item, event.nativeEvent);
  };

  const {item, isHidden, animateOnDidMount} = props;
  return (
    <ScaleAndOpacity isHidden={isHidden} animateOnDidMount={animateOnDidMount}>
      <TouchableOpacity onPress={onPressed}>
        <ImageBackground
          source={{uri: item?.imageUri}}
          style={styles.container}
          imageStyle={styles.image}>
          <Text style={styles.title}>{item?.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ScaleAndOpacity>
  );
};

export default Card;