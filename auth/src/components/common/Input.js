//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// create a component
const Input = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                value={props.value}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={props.onChangeText}
                style={styles.input} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60
    },
    label: {
        flex: 1,
        color: '#707070',
        paddingLeft: 10,
        fontSize: 16
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color:'#000'
    }
});

//make this component available to the app
export { Input };
