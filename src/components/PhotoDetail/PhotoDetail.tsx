import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import NavigationBar from 'src/components/common/NavigationBar';
import Avatar from 'src/components/common/Avatar';
import styles from './styles';

const PhotoDetail = (props: NavigationStackScreenProps) => {
  const {cardItem} = props.navigation.state.params;
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar onGoBack={props.navigation.goBack} />
      <View style={styles.content}>
        <Avatar
          imageUri={{uri: cardItem?.thumbnailUrl}}
          style={styles.avatar}
        />
        <Text style={styles.text}>{cardItem?.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(PhotoDetail);
