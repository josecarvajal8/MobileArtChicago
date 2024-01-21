import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './Home.styles';

export const Home: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Welcome'}</Text>
    </SafeAreaView>
  );
};
