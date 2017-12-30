//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import firebase from '../firebase';

import { Card, CardItem, Button, Input } from './common';


// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    onLoginPressed () {
        const { email, password } = this.state;
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(this.onAuthFailed.bind(this));
            }); 
    }

    onAuthFailed() {
        this.setState({ 'error': 'Authentication Failed' });
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
                
                <Text style={styles.errorMessage} >{this.state.error}</Text>

                <CardItem>
                    <Button onPress={this.onLoginPressed.bind(this)}>Login</Button>
                </CardItem>

            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#FF0000',
        marginTop: 5
    },
});

//make this component available to the app
export default LoginForm;
