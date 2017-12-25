// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './src/components/App';

// Step3: Register or export the component
AppRegistry.registerComponent('books', () => App);
