import React, {FC, useEffect, useState} from 'react';
import {getEvents} from '../../services/chicago-art-api';
import {EventsResponse} from '../../model/art-events';
import {BaseLayout} from '../../components/BaseLayout';
import {EventTile} from '../../components/EventTile';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {styles} from './ArtEvents.styles';
import {useToggle} from '../../hooks/toggle';
import {colors} from '../../constants/styling';

export const ArtEvents: FC = () => {
  const [eventsData, setEventsData] = useState<EventsResponse | null>(null);
  const {state: loading, handlers} = useToggle();
  const getEventData = async () => {
    const data = await getEvents();
    setEventsData(data);
  };
  const onPagination = async () => {
    if (eventsData) {
      const {pagination} = eventsData;
      handlers.on();
      const data = pagination.next_url
        ? await getEvents(pagination.next_url)
        : null;
      data &&
        setEventsData(prev => {
          return {
            pagination: data.pagination,
            artEvents: [...(prev?.artEvents ?? []), ...data.artEvents],
          };
        });
      handlers.off();
    }
  };
  useEffect(() => {
    getEventData();
  }, []);
  return (
    <BaseLayout title="Events" leftButton={false}>
      {eventsData?.artEvents && (
        <FlatList
          data={eventsData.artEvents}
          renderItem={({item}) => <EventTile {...item} />}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
          onEndReached={onPagination}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator size={'large'} color={colors.secondary} />
            ) : null
          }
        />
      )}
    </BaseLayout>
  );
};
