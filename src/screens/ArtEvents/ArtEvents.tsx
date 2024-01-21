import React, {FC, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {getEvents} from '../../services/chicago-art-api';
import {EventsResponse} from '../../model/art-events';
import {BaseLayout} from '../../components/BaseLayout';

export const ArtEvents: FC = () => {
  const [eventsData, setEventsData] = useState<EventsResponse | null>(null);
  const getEventData = async () => {
    const data = await getEvents();
    setEventsData(data);
  };
  useEffect(() => {
    getEventData();
  }, []);

  return (
    <BaseLayout title="Events">
      <Text>{'Welcome eventssss'}</Text>
    </BaseLayout>
  );
};
