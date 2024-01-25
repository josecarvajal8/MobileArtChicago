import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../../constants/styling';

export const LoadingComponent: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.common_black,
    opacity: 0.7,
    zIndex: 1,
  },
});
