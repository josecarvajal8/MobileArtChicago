import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {styles} from './EventImage.styles';

export const EventImage: FC<{
  image: string;
  onSaveEvent: () => void;
  isEventSaved: boolean;
}> = ({image, onSaveEvent, isEventSaved}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: image}} />
      <View style={styles.buttonsContainer}>
        <Pressable
          disabled={isEventSaved}
          style={
            isEventSaved ? {...styles.button, opacity: 0.5} : styles.button
          }
          onPress={onSaveEvent}>
          <Image
            source={require('../../../assets/images/heart.png')}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};
