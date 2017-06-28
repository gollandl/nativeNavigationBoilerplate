import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Navigator, { TabBar, Tab } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENTWO } from '../routes';


export default class ScreenOne extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Screen One
          </Text>
          <Button
            title="Push"
            onPress={() => Navigator.push(SCREENTWO)}
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
