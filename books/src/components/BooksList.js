// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Step2: Create the component
class BooksList extends Component {
    componentWillMount() {
        // Calls to the server
        const url = 'https://abolkog.com/api/books';
        
        axios.get(url)
            .then((response) => {
                const books = response.data.books;
                console.log(books);
            });
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
