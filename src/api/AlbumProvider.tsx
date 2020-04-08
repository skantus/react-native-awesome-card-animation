import React from 'react';
import AlbumContext from 'src/store/AlbumContext';
import data from 'src/api/data/data';

class AlbumProvider extends React.Component {
  render() {
    return (
      <AlbumContext.Provider value={{data}}>
        {this.props.children}
      </AlbumContext.Provider>
    );
  }
}

export default AlbumProvider;
