import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getEvents} from '../../services/chicago-art-api';
import {EventsResponse} from '../../model/art-events';

export const ArtEvents: FC = () => {
  const [eventsData, setEventsData] = useState<EventsResponse | null>(null);
  const getEventData = async () => {
    const data = await getEvents();
    setEventsData(data);
  };
  useEffect(() => {
    getEventData();
  }, []);

  console.log(eventsData);
  return (
    <SafeAreaView>
      <Text>{'Welcome eventssss'}</Text>
    </SafeAreaView>
  );
};
