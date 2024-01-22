import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {ArtEvent} from '../../model/art-events';
import {styles} from './EventTile.styles';

export const EventTile: FC<ArtEvent> = ({image_url, title, date_display}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: image_url}} />
      <View style={styles.containerDetail}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.date}>{date_display}</Text>
      </View>
    </View>
  );
};
