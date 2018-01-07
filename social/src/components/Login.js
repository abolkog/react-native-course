//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';

import Colors from '../constants/Colors';


// create a component
class Login extends Component {
    render() {
        return (
            <View>
                <FormLabel>Email</FormLabel>
                <FormInput 
                    autoCorrect={false}
                    autoCapitalize='none'
                    autoFocus
                    keyboardType='email-address'
                />

                <FormLabel>Password</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                />

                <Button 
                    title='Login'
                    backgroundColor={Colors.blue}
                    buttonStyle={{ marginTop: 20 }}
                />

                <Button
                    title='No Account ? Sign up now'
                    backgroundColor={Colors.redColor}
                    buttonStyle={{ marginTop: 30 }}
                    onPress={() => this.props.navigation.navigate('Signup')}
                />
            </View>
        );
    }
}



//make this component available to the app
export default Login;
