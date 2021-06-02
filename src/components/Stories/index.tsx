import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';

interface StoriesData {
  imageUri: string;
  name: string;
}
const data: StoriesData[] = [
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1212967385897943041/hezIqIK7_400x400.jpg',
    name: '아이유',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEtevEN7y3ikQinihBiYedpg_edtXNr30kp4P7foYphNV7IVYZ81qiskMgbMM1LCff_A&usqp=CAU',
    name: '황소윤',
  },
  {
    imageUri:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99530A3B5BE7C18033',
    name: '김고은',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYVkiGMfJznUbF_bLbK1nD0r5U-GH8CxzFM_olMyGrIN7vxUGjwRk7ONjW1JV7QB7ZjI&usqp=CAU',
    name: '여자친구',
  },
  {
    imageUri:
      'https://pbs.twimg.com/profile_images/1212967385897943041/hezIqIK7_400x400.jpg',
    name: '아이요',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEtevEN7y3ikQinihBiYedpg_edtXNr30kp4P7foYphNV7IVYZ81qiskMgbMM1LCff_A&usqp=CAU',
    name: '새소년',
  },
  {
    imageUri:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99530A3B5BE7C18033',
    name: '은교',
  },
  {
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYVkiGMfJznUbF_bLbK1nD0r5U-GH8CxzFM_olMyGrIN7vxUGjwRk7ONjW1JV7QB7ZjI&usqp=CAU',
    name: '막내스',
  },
];
const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
