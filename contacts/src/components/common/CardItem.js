//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CardItem = (props) => {
    return (
        <View style={styles.container}>
            { props.children }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
});

//make this component available to the app
export { CardItem };
