import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './router.interface';
import {ArtEvents, EventDetail, Favorites} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Events">
        <Screen
          name={'Events'}
          component={ArtEvents}
          options={{headerShown: false}}
        />
        <Screen
          name="EventDetail"
          component={EventDetail as any}
          options={{headerShown: false}}
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
