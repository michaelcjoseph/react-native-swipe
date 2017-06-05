import Expo from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ball from './src/Ball';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

Expo.registerRootComponent(App);
