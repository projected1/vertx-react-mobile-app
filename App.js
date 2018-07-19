import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Press the blue button to increment the click counter
        </Text>
        <View style={styles.button}>
          <Button
            onPress={() =>
              fetch('http://18.221.177.61:8080/api/click/new', {method: 'POST'})}
            color="#fff"
            title="PRESS ME"
            accessibilityLabel="Increment the click counter"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323234',
  },
  paragraph: {
    margin: 34,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ddd',
    textShadowColor: '#111',
    textShadowOffset: {width: 2, height: 2},
  },
  button: {
    width: 250,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 30,
  },
});
