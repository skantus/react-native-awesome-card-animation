import React from 'react';
import {Image, ImageURISource} from 'react-native';
import styles from './styles';

type Props = {
  imageUri: ImageURISource;
};

const Avatar = (props: Props) => (
  <Image source={props.imageUri} style={styles.avatar} />
);

export default Avatar;
