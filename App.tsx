import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {getFontSizes, fontsFam, colors} from './src/constants/styling';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'Welcome'}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...getFontSizes('display'),
    fontFamily: fontsFam.bold,
    color: colors.common_black,
  },
});

export default App;
