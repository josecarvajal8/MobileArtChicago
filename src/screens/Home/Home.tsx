import React, {FC} from 'react';
import {Text} from 'react-native';
import {styles} from './Home.styles';
import {BaseLayout} from '../../components/BaseLayout';

export const Home: FC = () => {
  return (
    <BaseLayout title="Dashboard" leftButton={false}>
      <Text style={styles.title}>{'Welcome'}</Text>
    </BaseLayout>
  );
};
