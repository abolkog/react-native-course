// Step 1: Import Libraries that we need
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

import ListItem from './ListItem';

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

    renderBookItem = ({ item }) => {
        return <ListItem book={item} />;
    }

    keyExtractor = (item, index) => index;
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.books}
                    renderItem={this.renderBookItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

export default BooksList;
