//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button, Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import Colors from '../constants/Colors';

// create a component
class Signup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            profileImage: '',
            email: '',
            name: '',
            password: '',
            disabled: true
        }
    }
    onSelectProfilePicture() {
        const options = {
            title: 'Select Profile Image',
            quality: 0.1,
            mediaType: 'photo'
        };

        ImagePicker.showImagePicker(options, (response) => {
            this.setState({
                profileImage: response.uri,
                disabled: false
            })
        });
    }
    render() {
        return (
            <View>
                <View style={{ marginVertical: 10, alignItems: 'center', justifyContent: 'center'}} >
                <Avatar 
                    large
                    rounded
                    onPress={this.onSelectProfilePicture.bind(this)}
                    source={{ uri: this.state.profileImage }}
                />
                </View>

                <FormLabel>Name</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    autoFocus
                    onChangeText={(name) => this.setState({ name })}
                />

                <FormLabel>Email</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({ email })}
                />

                <FormLabel>Password</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button
                    title='Sign up'
                    backgroundColor={Colors.blue}
                    buttonStyle={{ marginTop: 20 }}
                    disabled={this.state.disabled}
                />

            </View>
        );
    }
}


//make this component available to the app
export default Signup;
