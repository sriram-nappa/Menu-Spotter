'use strict';

var React = require('react-native');
var SearchPage = require('./components/SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class MenuSpotterApp extends React.Component {
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

React.AppRegistry.registerComponent('MenuSpotter',
  function() { return MenuSpotterApp });
