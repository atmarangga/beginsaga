import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './redux';
import AppContainer from './AppContainer';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Provider store={store}>
          <SafeAreaView>
            <AppContainer />
          </SafeAreaView>
        </Provider>
      </>
    );
  }
}
