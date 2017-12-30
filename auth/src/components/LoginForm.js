//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import Card from './common/Card';
// import CardItem from './common/CardItem';
// import Button from './common/Button';

import { Card, CardItem, Button } from './common';


// create a component
class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardItem></CardItem>
                
                <CardItem></CardItem>
                
                <CardItem>
                    <Button>Login</Button>
                </CardItem>

            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default LoginForm;
