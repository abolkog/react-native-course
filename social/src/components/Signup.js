//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button, Avatar } from 'react-native-elements';

import Colors from '../constants/Colors';

// create a component
class Signup extends Component {
    render() {
        return (
            <View>
                <Avatar 
                    large
                    rounded
                />
                
                <FormLabel>Name</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    autoFocus
                />

                <FormLabel>Email</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />

                <FormLabel>Password</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                />

                <Button
                    title='Sign up'
                    backgroundColor={Colors.blue}
                    buttonStyle={{ marginTop: 20 }}
                />

            </View>
        );
    }
}


//make this component available to the app
export default Signup;
