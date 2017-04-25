'use strict';

import React, {StyleSheet, Component, AppRegistry} from 'react-native';
import SearchPage from './components/SearchPage';

export default class MenuSpotter extends Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Page',
          component: SearchPage,
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('MenuSpotter', () => MenuSpotter);
