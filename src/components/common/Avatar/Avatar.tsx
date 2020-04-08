import React from 'react';
import {Image, ImageURISource, ImageStyle} from 'react-native';
import styles from './styles';

type Props = {
  imageUri: ImageURISource;
  style?: ImageStyle;
};

const Avatar = (props: Props) => (
  <Image source={props.imageUri} style={[styles.avatar, props.style]} />
);

export default Avatar;
