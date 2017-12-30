//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// create a component
const Spinner = ({ size }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color='#82b54a' size={ size || 'large' } />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export { Spinner };
