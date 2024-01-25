import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {ArtEvent} from '../../model/art-events';
import {styles} from './EventTile.styles';
import {formatEventDate} from '../../utils/adapters';
import {useNavigation} from '@react-navigation/native';

export const EventTile: FC<ArtEvent> = ({
  image_url,
  title,
  date_display,
  start_date,
  end_date,
  api_link,
}) => {
  const router = useNavigation();
  const eventDate = date_display ?? formatEventDate(start_date, end_date);
  const onNavigateDetail = () => {
    router.navigate('EventDetail', {
      detailLink: api_link,
      title,
    });
  };
  return (
    <Pressable onPress={onNavigateDetail} style={styles.container}>
      <Image style={styles.img} source={{uri: image_url}} />
      <View style={styles.containerDetail}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        {eventDate && <Text style={styles.date}>{eventDate}</Text>}
      </View>
    </Pressable>
  );
};
