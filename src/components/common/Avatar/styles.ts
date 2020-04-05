import {StyleSheet} from 'react-native';

const AVATAR_SIZE = 80;

const styles = StyleSheet.create({
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    resizeMode: 'contain',
  },
});

export default styles;
