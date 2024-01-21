import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './router.interface';
import {Home, ArtEvents} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Events">
        <Screen name={'Home'} component={Home} options={{headerShown: false}} />
        <Screen
          name={'Events'}
          component={ArtEvents}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
