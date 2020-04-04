import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
}

const Hello: React.FC<Props> = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

export default Hello;
