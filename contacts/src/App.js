//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import Routes from './RootNavigator';

// create a component
class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Routes />
            </Provider>
        );
    }
}


//make this component available to the app
export default App;
