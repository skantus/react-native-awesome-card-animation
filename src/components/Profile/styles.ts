import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headingText: {
    marginTop: 12,
    color: '#1a1a1a',
    fontFamily: 'klavika-medium',
    fontSize: 24,
  },
  subHeadingContent: {
    flexDirection: 'row',
  },
  subHeadingText: {
    marginTop: 2,
    color: '#1a1a1a',
    fontFamily: 'klavika-light',
    fontSize: 21,
  },
});

export default styles;
