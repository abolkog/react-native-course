//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Routes from './RootNavigator';

// create a component
class App extends Component {
    render() {
        return (
            <Routes />
        );
    }
}


//make this component available to the app
export default App;
