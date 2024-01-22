import React, {FC, useEffect, useState} from 'react';
import {getEvents} from '../../services/chicago-art-api';
import {EventsResponse} from '../../model/art-events';
import {BaseLayout} from '../../components/BaseLayout';
import {EventTile} from '../../components/EventTile';
import {FlatList, View} from 'react-native';
import {styles} from './ArtEvents.styles';

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
      {eventsData?.artEvents && (
        <FlatList
          data={eventsData.artEvents}
          renderItem={({item}) => <EventTile {...item} />}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </BaseLayout>
  );
};
