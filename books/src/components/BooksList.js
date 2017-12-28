// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Step2: Create the component
class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }
    componentWillMount() {
        // Calls to the server
        const url = 'https://abolkog.com/api/books';
        axios.get(url)
            .then((response) => { // Handle the response
                const books = response.data.books;
                this.setState({ books });
            });
    }

    render() {
        return (
            <View>
                { this.state.books.map(book => {
                    return (
                        <View>
                            <Text>{book.name}</Text>
                            <Text>{book.price}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

export default BooksList;
