import React, {useState} from 'react';
import {Easing, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import StatusBar from '@react-native-community/status-bar';
import {SharedElement, TranslateYAndOpacity} from 'react-native-motion';
import AlbumContext from 'src/store/AlbumContext';
import Avatar from 'src/components/common/Avatar';
import Card from 'src/components/common/Card';
import Header from './Header';
import styles from './styles';

type Props = {
  phase: string;
  selectedItem: Card;
  onBackPress: () => void;
  onSharedElementMovedToSource: () => void;
  onSharedElementMovedToDestination: () => void;
};

const PHASE_2 = 'phase-2';
const PHASE_3 = 'phase-3';
const LIGHT_CONTENT = 'light-content';
const TRANSITION_TIME = 56;
let enabledRef = true;

const Detail = (props: Props & NavigationStackScreenProps) => {
  const [opacityOfDestinationItem, setOpacityOfDestinationItem] = useState(0);
  const [sharedElementRef, setSharedElementRef] = useState(null);

  const onMoveToDestinationDidFinish = () => {
    setOpacityOfDestinationItem(1);
    props.onSharedElementMovedToDestination();
  };

  const onMoveToSourceWillStart = () => {
    setOpacityOfDestinationItem(0);
  };

  const renderItem = ({item, index}: {item: CardItem; index: number}) => {
    const {phase} = props;
    return (
      <TranslateYAndOpacity
        isHidden={phase !== PHASE_2}
        delay={TRANSITION_TIME * index}>
        <TouchableOpacity
          style={[styles.itemContainer, styles.item]}
          onPress={() =>
            props.navigation.navigate('PhotoDetail', {cardItem: item})
          }>
          <Avatar imageUri={{uri: item.thumbnailUrl}} />
          <Text style={styles.titleText}>{item.title}</Text>
        </TouchableOpacity>
      </TranslateYAndOpacity>
    );
  };

  const handleMoveToSource = (): void => {
    if (props.phase === PHASE_3 && enabledRef) {
      enabledRef = false;
      sharedElementRef?.moveToSource();
      setTimeout(() => {
        enabledRef = true;
      }, 1000);
    }
  };

  handleMoveToSource();
  return props.selectedItem ? (
    <View style={styles.container}>
      <StatusBar barStyle={LIGHT_CONTENT} />
      <Header
        isHidden={props.phase === PHASE_3}
        onBackPress={props.onBackPress}
      />
      <SharedElement
        ref={(node: {moveToSource: () => void}) => {
          setSharedElementRef(node);
        }}
        sourceId={props.selectedItem?.title}
        easing={Easing.in(Easing.back(0))}
        onMoveToDestinationDidFinish={onMoveToDestinationDidFinish}
        onMoveToSourceWillStart={onMoveToSourceWillStart}
        onMoveToSourceDidFinish={props.onSharedElementMovedToSource}>
        <View
          style={[
            styles.itemContent,
            {
              opacity: opacityOfDestinationItem,
            },
          ]}>
          <Card
            item={props.selectedItem}
            animateOnDidMount={false}
            isHidden={false}
          />
        </View>
      </SharedElement>

      <TranslateYAndOpacity isHidden={props.phase !== PHASE_2}>
        <View style={[styles.itemContainer, styles.description]}>
          <Text style={styles.titleText}>
            {props.selectedItem?.description}
          </Text>
        </View>
      </TranslateYAndOpacity>

      <AlbumContext.Consumer>
        {(context) => {
          return (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={context.photos}
              extraData={props.phase}
              keyExtractor={(item) => item?.title}
              renderItem={renderItem}
            />
          );
        }}
      </AlbumContext.Consumer>
    </View>
  ) : null;
};

export default withNavigation(Detail);
