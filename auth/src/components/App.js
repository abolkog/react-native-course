//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './common/Header';

// create a component
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header title='Auth' />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default App;
