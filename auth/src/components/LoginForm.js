//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import Card from './common/Card';
// import CardItem from './common/CardItem';
// import Button from './common/Button';

import { Card, CardItem, Button, Input } from './common';


// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onLoginPressed () {
        console.log(`UserName is : ${this.state.email}`);
        console.log(`Password is : ${this.state.password}`);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label='Email'
                        placeholder='Enter your email'
                        secureTextEntry={false}
                        onChangeText={ (email) => this.setState({ email }) }
                    />
                </CardItem>
                
                <CardItem>
                    <Input
                        label='Password'
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardItem>
                
                <CardItem>
                    <Button onPress={this.onLoginPressed.bind(this)}>Login</Button>
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
