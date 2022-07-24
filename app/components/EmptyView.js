import React from 'react';
import { View, StyleSheet } from 'react-native';

const EmptyView = ({ height }) => {
  return <View style={[styles.container, { height }]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 20,
  },
});

export default EmptyView;
