import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = () => {
    const imageUrl = 'https://images-na.ssl-images-amazon.com/images/I/51bxYmvqwkL._SX397_BO1,204,203,200_.jpg';
    return (
        <View style={styles.listItem}>
            
            <View style={styles.infoContainer}>
                <Image style={styles.bookImage} source={{ uri: imageUrl }} />
                <View style={styles.bookInfo}>
                    <Text>Book title</Text>
                    <Text>Book Price</Text>
                    <Text>Book ISBN </Text>
                </View>
            </View>

            <Text>Button Here</Text>
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
