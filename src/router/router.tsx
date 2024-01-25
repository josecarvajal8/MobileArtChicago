import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './router.interface';
import {ArtEvents, EventDetail, Favorites} from '../screens';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export const Router: FC = () => {
  useEffect(() => {
    checkCalendarPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkCalendarPermission = async () => {
    try {
      const statusCalendars = await check(PERMISSIONS.IOS.CALENDARS);

      if (statusCalendars !== RESULTS.GRANTED) {
        requestCalendarPermission();
      }
    } catch (error) {
      console.error('Error checking calendar permission:', error);
    }
  };

  const requestCalendarPermission = async () => {
    try {
      const status = await request(PERMISSIONS.IOS.CALENDARS);

      if (status === RESULTS.GRANTED) {
        console.log('Calendar permission granted');
      } else {
        console.log('Calendar permission denied');
      }
    } catch (error) {
      console.error('Error requesting calendar permission:', error);
    }
  };

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
