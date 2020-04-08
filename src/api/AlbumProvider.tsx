import React from 'react';
import AlbumContext from 'src/store/AlbumContext';
import data from 'src/api/data/data';
import API from 'src/api/API';

type Props = {
  children: any;
};

type State = {
  photos: CardItem[];
};

const BASE_API = 'https://jsonplaceholder.typicode.com/';

class AlbumProvider extends React.Component<Props> {
  state = {
    photos: [],
  } as State;

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const photos = await API.get({url: `${BASE_API}albums/1/photos`});
    this.setState({photos});
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
