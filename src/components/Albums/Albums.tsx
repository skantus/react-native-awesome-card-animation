import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import StatusBar from '@react-native-community/status-bar';
import {SharedElementRenderer} from 'react-native-motion';
import AnimatedHeader from 'src/components/common/AnimatedHeader';
import AlbumProvider from 'src/api/AlbumProvider';
import List from './List';
import Detail from './Detail';
import styles from './styles';

const PHASE_0 = 'phase-0';
const PHASE_1 = 'phase-1';
const PHASE_2 = 'phase-2';
const PHASE_3 = 'phase-3';
const DARK_CONTENT = 'dark-content';
const FORCED_INSET_BOTTOM = 'never';

const Albums = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [phase, setPhase] = useState(PHASE_0);

  const onSharedElementMovedToSource = () => {
    setPhase(PHASE_0);
    setSelectedItem(null);
  };

  const onItemPressed = (item: Card) => {
    setPhase(PHASE_1);
    setSelectedItem(item);
  };

  const onSharedElementMovedToDestination = () => {
    setPhase(PHASE_2);
  };

  const onBackPressed = () => {
    setPhase(PHASE_3);
  };

  const getBackgroundColor = {
    backgroundColor:
      phase !== PHASE_1 && phase !== PHASE_2 ? 'white' : '#1a1a1a',
  };
  return (
    <SharedElementRenderer>
      <StatusBar barStyle={DARK_CONTENT} />
      <SafeAreaView
        forceInset={{bottom: FORCED_INSET_BOTTOM}}
        style={[styles.container, getBackgroundColor]}>
        <View style={styles.content}>
          <AnimatedHeader isHidden={phase !== PHASE_1 && phase !== PHASE_2} />
          <View style={styles.container}>
            <AlbumProvider>
              <List
                selectedItem={selectedItem}
                onItemPress={onItemPressed}
                phase={phase}
                theme={null}
                screenProps={null}
              />
              <Detail
                phase={phase}
                selectedItem={selectedItem}
                onBackPress={onBackPressed}
                onSharedElementMovedToDestination={
                  onSharedElementMovedToDestination
                }
                onSharedElementMovedToSource={onSharedElementMovedToSource}
                theme={null}
                screenProps={null}
              />
            </AlbumProvider>
          </View>
        </View>
      </SafeAreaView>
    </SharedElementRenderer>
  );
};

export default Albums;
