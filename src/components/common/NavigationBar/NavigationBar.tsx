import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  onGoBack: () => void;
};

const NavigationBar = (props: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props?.onGoBack}>
      <Image source={require('src/images/backIcon.png')} />
    </TouchableOpacity>
  </View>
);

export default NavigationBar;
