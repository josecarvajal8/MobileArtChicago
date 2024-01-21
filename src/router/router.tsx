import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './router.interface';
import {Home} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={'Home'} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};
