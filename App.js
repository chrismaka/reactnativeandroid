 
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,createAppContainer} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';

const rootstack = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
   Property: { screen: PropertyView},
});
const App = createAppContainer(rootstack);
export default App;
