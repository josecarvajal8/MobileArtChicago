import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../../components/BaseLayout';
import {EventTile} from '../../components/EventTile';
import {FlatList, View} from 'react-native';
import {getData} from '../../services/storage';
import {STORE_KEY_FAV_EVENTS} from '../../constants/config';
import {ArtEvent} from '../../model/art-events';
import {styles} from './Favorites.styles';

export const Favorites: FC = () => {
  const [savedEvents, setSavedEvents] = useState<ArtEvent[]>([]);

  const getSavedEvents = async () => {
    const data = await getData(STORE_KEY_FAV_EVENTS);
    if (data) {
      setSavedEvents(JSON.parse(data));
    }
  };

  useEffect(() => {
    getSavedEvents();
  }, []);

  return (
    <BaseLayout title="Favorites" rightButton={false}>
      {savedEvents.length > 0  && (
        <FlatList
          data={savedEvents}
          renderItem={({item}) => <EventTile {...item} />}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.contentList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </BaseLayout>
  );
};
