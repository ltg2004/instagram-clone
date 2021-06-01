import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../components/ProfilePicture';

const HomeScreen = () => {
  return (
    <View>
      <Text>hello world</Text>
      <ProfilePicture uri="https://pbs.twimg.com/profile_images/1212967385897943041/hezIqIK7_400x400.jpg" />
    </View>
  );
};

export default HomeScreen;
