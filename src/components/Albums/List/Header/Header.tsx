import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AnimatedFadeView from 'src/components/common/AnimatedFadeView';
import styles from './styles';

type Props = {
  isHidden: boolean;
  onPress?: () => void;
};

const Header = ({isHidden, onPress}: Props) => {
  return (
    <AnimatedFadeView isHidden={isHidden}>
      <View style={styles.container}>
        <Text style={styles.text}>Albums</Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </AnimatedFadeView>
  );
};

export default Header;
