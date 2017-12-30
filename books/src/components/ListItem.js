import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import Button from './Button';

const ListItem = (props) => {
    const book = props.book;
    return (
        <View style={styles.listItem}>
            
            <View style={styles.infoContainer}>
                <Image style={styles.bookImage} source={{ uri: book.image }} />
                <View style={styles.bookInfo}>
                    <Text>{book.name}</Text>
                    <Text>Price: {book.price}</Text>
                    <Text>ISBN:{book.isbn}</Text>
                </View>
            </View>

            <Button onPress={() => Linking.openURL(book.link)} >
                Buy Now
            </Button>
            
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        flex: 1,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'column'
    },
    infoContainer: {
        flexDirection: 'row'
    },
    bookInfo: {
       flexDirection: 'column',
       paddingLeft: 10,
       justifyContent: 'space-between'
    },
    bookImage: {
        width: 100,
        height: 100
    }
});

export default ListItem;
