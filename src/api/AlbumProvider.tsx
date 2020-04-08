import React, {useEffect, useState} from 'react';
import AlbumContext from 'src/store/AlbumContext';
import data from 'src/api/data/data';
import API from 'src/api/API';

type Props = {
  children: any;
};

const BASE_API = 'https://jsonplaceholder.typicode.com/';

const AlbumProvider = (props: Props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const response = await API.get({url: `${BASE_API}albums/1/photos`});
    setPhotos(response);
  };

  return (
    <AlbumContext.Provider value={{data, photos}}>
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
