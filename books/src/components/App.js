// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './Header';

// Step2: Create the component
class App extends Component {
    render() {
        return (
            <View>
                <Header />
            </View>
        );
    }
}

export default App;
