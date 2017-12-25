// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

// Step2: Create the component
class App extends Component {
    render() {
        return (
            <Text>Hello World</Text>
        );
    }
}

// Step3: Register or export the component
AppRegistry.registerComponent('books', () => App);
