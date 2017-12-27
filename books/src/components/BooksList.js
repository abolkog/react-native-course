// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { View, Text } from 'react-native';


// Step2: Create the component
class BooksList extends Component {
    componentWillMount() {
        // Calls to the server
    }

    render() {
        return (
            <View>
                <Text>Books List</Text>
            </View>
        );
    }
}

export default BooksList;
