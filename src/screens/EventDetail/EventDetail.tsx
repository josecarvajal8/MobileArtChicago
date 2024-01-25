import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../../components/BaseLayout';
import {ScrollView, Text} from 'react-native';
import {getEventDetail} from '../../services/chicago-art-api';
import {ArtEventDetail} from '../../model/art-events';
import {styles} from './EventDetail.styles';
import {formatEventDate, sanitizeWebTags} from '../../utils/adapters';
import {EventDescription} from '../../components/EventDescription/EventDescription';
import {EventImage} from '../../components/EventImage/EventImage';
import {getData, storeData} from '../../services/storage';
import {STORE_KEY_FAV_EVENTS} from '../../constants/config';
import {LoadingComponent} from '../../components/Loading/Loading';
import {useToggle} from '../../hooks/toggle';

interface EventDetailProps {
  route: {
    params: {
      detailLink: string;
      title: string;
    };
  };
}

export const EventDetail: FC<EventDetailProps> = ({route}) => {
  const {params} = route;
  const [artEvent, setArtEvent] = useState<ArtEventDetail | null>(null);
  const [savedEvents, setSavedEvents] = useState<ArtEventDetail[]>([]);
  const {state: loading, handlers: loadingHandlers} = useToggle();
  const getSavedEvents = async () => {
    const data = await getData(STORE_KEY_FAV_EVENTS);
    if (data) {
      setSavedEvents(JSON.parse(data));
    }
  };
  const getEventInfo = async () => {
    loadingHandlers.on();
    if (params.detailLink) {
      const data = await getEventDetail(params.detailLink);
      setArtEvent(data);
    }
    loadingHandlers.off();
  };

  const saveEvent = async () => {
    loadingHandlers.on();
    const newEvents = Array.from(savedEvents);
    newEvents.push(artEvent as ArtEventDetail);
    await storeData(STORE_KEY_FAV_EVENTS, JSON.stringify(newEvents));
    await getSavedEvents();
    loadingHandlers.off();
  };
  useEffect(() => {
    getEventInfo();
    getSavedEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventDate = (): string => {
    if (artEvent) {
      return artEvent?.dateDisplay
        ? artEvent?.dateDisplay
        : formatEventDate(artEvent?.startDate ?? '', artEvent?.endDate ?? '');
    }
    return '';
  };

  const isEventSaved = Boolean(
    artEvent && savedEvents.find(el => el.id === artEvent.id),
  );
  return (
    <>
      {loading && <LoadingComponent />}
      <BaseLayout rightButton={false} title={params.title}>
        {artEvent ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}>
            <EventImage
              image={artEvent.image}
              onSaveEvent={saveEvent}
              isEventSaved={isEventSaved}
            />
            <Text style={styles.date}>{`Date: ${eventDate()}`}</Text>
            {artEvent.location && (
              <Text
                style={
                  styles.location
                }>{`Location: ${artEvent.location}`}</Text>
            )}
            <EventDescription
              description={sanitizeWebTags(artEvent.description)}
            />
          </ScrollView>
        ) : null}
      </BaseLayout>
    </>
  );
};
