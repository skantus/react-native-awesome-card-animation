import {StyleSheet} from 'react-native';

const AVATAR_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'klavika-light',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: 20,
  },
});

export default styles;
