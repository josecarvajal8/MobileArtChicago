import React, {FC} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {styles} from './BaseLayout.styles';
import {colors} from '../../constants/styling';
import {useNavigation} from '@react-navigation/native';

interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
  leftButton?: boolean;
  rightButton?: boolean;
}

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  title,
  leftButton = true,
  rightButton = true,
}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.dark_silver}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        {leftButton ? (
          <Pressable onPress={navigation.goBack} style={styles.buttons}>
            <Image source={require('../../../assets/images/left.png')} />
          </Pressable>
        ) : (
          <View style={styles.emptyBox} />
        )}
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        {rightButton ? (
          <Pressable style={styles.buttons}>
            <Image source={require('../../../assets/images/heart.png')} />
          </Pressable>
        ) : (
          <View style={styles.emptyBox} />
        )}
      </View>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
