'use strict';

import React, {StyleSheet, Component, AppRegistry, TouchableHighlight, Text} from 'react-native';
import SearchPage from './components/SearchPage';

export default class MenuSpotter extends Component {

  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return <SearchPage navigator = {navigator} />
    }
  }
  render() {
    return (
      <React.Navigator
        style={styles.container}
        initialRoute={{
          name: 'Home',
          title: 'Search Page',
          component: SearchPage
        }}
        renderScene={this.renderScene.bind(this)}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('MenuSpotter', () => MenuSpotter);
