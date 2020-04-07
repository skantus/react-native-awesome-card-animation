import React, {useState} from 'react';
import {View, FlatList, Easing} from 'react-native';
import {SharedElement} from 'react-native-motion';
import Header from './Header';
import Card from 'src/components/common/Card';
import data from 'src/api/data/data';
import styles from './styles';

type Props = {
  phase: string;
  selectedItem: Card;
  onItemPress: (arg0: Card) => void;
};

let sharedElementRefs: {[key: string]: {moveToDestination: () => void}} = {};

const List = (props: Props) => {
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
    <View style={styles.container}>
      <Header isHidden={phase !== 'phase-0'} />
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        extraData={{phase, opacityOfSelectedItem}}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
      />
    </View>
  );
};

export default List;
