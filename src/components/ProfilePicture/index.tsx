import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export type Props = {
  uri: string;
};

const ProfilePicture: React.FC<Props> = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;
