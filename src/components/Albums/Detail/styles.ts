import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  itemContainer: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  itemContent: {
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'klavika-light',
    marginLeft: 10,
    width: '70%',
  },
  description: {
    paddingLeft: 10,
  },
});

export default styles;
