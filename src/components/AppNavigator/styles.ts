import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabIconContent: {
    flex: 1,
    paddingTop: 4,
    marginTop: 5,
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
