import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type Props = {};

const AppLoading = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppLoading;
