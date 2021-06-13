import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import axios from 'axios';

type StoriesData = {
  imageUri: string;
  name: string;
};
// let storyData: StoriesData[] = [];
const Stories = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let mounted = true;
    axios.get('http://localhost:3000/stories').then(res => {
      const {code, data} = res.data;
      if (code === '2000') {
        if (mounted) {
          setItems(data);
        }
      }
    });
    return () => mounted = false;
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
