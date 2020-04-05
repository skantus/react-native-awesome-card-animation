import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>NEW YORK</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
