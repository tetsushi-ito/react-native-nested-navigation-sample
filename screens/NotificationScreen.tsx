import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';

export default class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeaderText as TextStyle}>NotificationScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeaderText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: 'center',
  }
});