import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {styles} from './EventImage.styles';

export const EventImage: FC<{image: string; onSaveEvent: () => void}> = ({
  image,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: image}} />
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button}>
          <Image
            source={require('../../../assets/images/heart.png')}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};
