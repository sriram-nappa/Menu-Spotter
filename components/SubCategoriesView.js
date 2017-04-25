'use strict';

import React, { Component, StyleSheet, Image, View, TouchableHighlight, ListView, AppRegistry, Text, AsyncStorage }  from 'react-native';

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

export default class SubCategoriesView extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text  style={styles.title}>
          Site under construction.
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('SubCategoriesView', () => SubCategoriesView);
