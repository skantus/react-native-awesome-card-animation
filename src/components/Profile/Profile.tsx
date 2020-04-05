import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Avatar from 'src/components/common/Avatar';
import styles from './styles';

const AVATAR_URL: string =
  'https://lh3.googleusercontent.com/-2bNYX7dIo2o/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPRV-bxILTrFNrkr7nXyMrQDM24rw/photo.jpg?sz=128';

const Profile = (): React.ReactNode => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Avatar imageUri={{uri: AVATAR_URL}} />
        <Text style={styles.headingText}>ALEJO CASTAÑO</Text>

        <View style={styles.subHeadingContent}>
          <Text style={styles.subHeadingText}>@skantus</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
