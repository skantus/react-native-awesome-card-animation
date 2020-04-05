import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#101010',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // FIXME: support for iPhoneX
    marginBottom: 30,
    height: 50,
  },
});

export default styles;
