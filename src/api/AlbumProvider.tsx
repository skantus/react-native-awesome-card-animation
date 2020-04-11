import React from 'react';
import Realm from 'realm';
import AlbumContext from 'src/store/AlbumContext';
import data from 'src/api/data/data';
import API from 'src/api/API';
import {
  photoDetailOptions,
  PHOTO_DETAIL_SCHEMA,
} from 'src/database/photoDetailRealm/schema';
import {realmObjectsToJson} from 'src/utils/utils';

type Props = {
  children: JSX.Element;
};

type State = {
  realm: Realm;
  photos: CardItem[];
};

const BASE_API = 'https://jsonplaceholder.typicode.com/';
const PHOTOS_URL = 'albums/1/photos';

class AlbumProvider extends React.Component<Props> {
  state = {photos: [], realm: null} as State;

  componentDidMount() {
    this.syncPhotosData();
  }

  componentWillUnmount() {
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  syncPhotosData = async () => {
    try {
      const realm = await Realm.open(photoDetailOptions);
      let photos: CardItem[] = [];

      // get the data from local database
      photos = realmObjectsToJson(realm.objects(PHOTO_DETAIL_SCHEMA));
      if (photos?.length > 0) {
        this.setState({photos, realm});
        return;
      }

      // get the data from remote server
      photos = await API.get({url: `${BASE_API}${PHOTOS_URL}`});
      realm.write(() => {
        photos?.map((item: CardItem) => {
          realm.create(PHOTO_DETAIL_SCHEMA, item);
        });
      });
      this.setState({photos, realm});
    } catch (error) {
      throw new Error(`Error syncing photos data: ${error}`);
    }
  };

  render() {
    return (
      <AlbumContext.Provider value={{data, photos: this.state.photos}}>
        {this.props.children}
      </AlbumContext.Provider>
    );
  }
}

export default AlbumProvider;
