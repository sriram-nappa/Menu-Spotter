'use strict';

import React from 'react';
import {StyleSheet, Component, AppRegistry, Navigator} from 'react-native';
import SearchPage from './components/SearchPage';

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class MenuSpotterAndroid extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Search Page',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('MenuSpotterAndroid', () => PropertyFinderApp);