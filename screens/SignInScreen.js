import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'ログイン',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeaderText}>ログイン状態に応じたビュー切り替えのテスト</Text>
        <Button title="ログイン" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
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
