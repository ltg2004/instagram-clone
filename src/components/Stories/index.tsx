import React, {useEffect, useReducer} from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import axios from 'axios';

type StoriesData = {
  imageUri: string;
  name: string;
};
// let storyData: StoriesData[] = [];
function reducer(state: StoriesData[], action: StoriesData[]) {
  return action;
}
const Stories: React.FC<{}> = () => {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios.get('http://localhost:3000/stories').then(res => {
      const {code, data} = res.data;
      if (code === '2000') {
        dispatch(data);
        // setItems(data);
        // return;
        // data.forEach((el) => {
        //   // setItems([el]);
        // });
      }
    });
  }, []);

  return (
    <FlatList
      data={items}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
