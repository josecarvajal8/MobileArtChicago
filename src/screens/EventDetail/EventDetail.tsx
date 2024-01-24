import React, {FC, useEffect, useState} from 'react';
import {BaseLayout} from '../../components/BaseLayout';
import {Text, View} from 'react-native';
import {getEventDetail} from '../../services/chicago-art-api';
import {ArtEventDetail} from '../../model/art-events';
import {styles} from './EventDetail.styles';
import {formatEventDate, sanitizeWebTags} from '../../utils/adapters';
import {EventDescription} from '../../components/EventDescription/EventDescription';
import {EventImage} from '../../components/EventImage/EventImage';

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
  const getEventInfo = async () => {
    if (params.detailLink) {
      const data = await getEventDetail(params.detailLink);
      setArtEvent(data);
    }
  };
  useEffect(() => {
    getEventInfo();
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
  return (
    <BaseLayout rightButton={false} title={params.title}>
      {artEvent ? (
        <View style={styles.container}>
          <EventImage image={artEvent.image} onSaveEvent={() => null} />
          <Text style={styles.date}>{`Date: ${eventDate()}`}</Text>
          {artEvent.location && (
            <Text
              style={styles.location}>{`Location: ${artEvent.location}`}</Text>
          )}
          <EventDescription
            description={sanitizeWebTags(artEvent.description)}
          />
        </View>
      ) : null}
    </BaseLayout>
  );
};
