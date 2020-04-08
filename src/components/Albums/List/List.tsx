import React, {useState} from 'react';
import {View, FlatList, Easing} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SharedElement} from 'react-native-motion';
import Header from './Header';
import Card from 'src/components/common/Card';
import AlbumContext from 'src/store/AlbumContext';
import styles from './styles';

type Props = {
  phase: string;
  selectedItem: Card;
  onItemPress: (arg0: Card) => void;
};

const PHASE_0 = 'phase-0';
let sharedElementRefs: {[key: string]: {moveToDestination: () => void}} = {};

const List = (props: Props & NavigationStackScreenProps) => {
  const [opacityOfSelectedItem, setOpacityOfSelectedItem] = useState(1);

  const onListItemPressed = (item: Card) => {
    props.onItemPress(item);
    sharedElementRefs[item.title].moveToDestination();
  };

  const onMoveToDestinationWillStart = () => {
    setOpacityOfSelectedItem(0);
  };

  const onMoveToSourceDidFinish = () => {
    setOpacityOfSelectedItem(1);
  };

  const getSharedNode = (node: {item: Card}) => {
    return (
      <View style={styles.content}>
        <Card item={node?.item} animateOnDidMount={false} isHidden={false} />
      </View>
    );
  };

  const renderItem = ({item}: {item: Card}) => {
    const {selectedItem} = props;
    const isHidden = selectedItem && selectedItem.title !== item.title;
    const id = item.title;

    return (
      <SharedElement
        easing={Easing.in(Easing.elastic(0))}
        ref={(node: {moveToDestination: () => void}) =>
          (sharedElementRefs[id] = node)
        }
        id={id}
        onMoveToDestinationWillStart={onMoveToDestinationWillStart}
        onMoveToSourceDidFinish={onMoveToSourceDidFinish}
        getNode={getSharedNode}
        item={item}>
        <View
          style={[
            styles.content,
            {
              opacity: opacityOfSelectedItem,
            },
          ]}>
          <Card item={item} onPress={onListItemPressed} isHidden={isHidden} />
        </View>
      </SharedElement>
    );
  };

  const {phase} = props;

  return (
    <AlbumContext.Consumer>
      {(context) => {
        return (
          <View style={styles.container}>
            <Header
              isHidden={phase !== PHASE_0}
              onPress={() => props.navigation.navigate('ProfileTab')}
            />
            <FlatList
              data={context.data}
              showsVerticalScrollIndicator={false}
              extraData={{phase, opacityOfSelectedItem}}
              keyExtractor={(item) => item.title}
              renderItem={renderItem}
            />
          </View>
        );
      }}
    </AlbumContext.Consumer>
  );
};

export default withNavigation(List);
