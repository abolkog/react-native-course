//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button, Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';

// create a component
class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageName: '',
            postImage: '',
            disabled: true
        };
    }


    showErrorMessage() {
        if (this.props.error) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                    <Text style={{ color: Colors.redColor, fontSize: 16 }}>{this.props.error}</Text>
                </View>
            );
        }
    }

    onSelectPostImage() {
        const options = {
            title: 'Select Image to share',
            quality: 0.1,
            mediaType: 'photo'
        }

        ImagePicker.showImagePicker(options, (response) => {
            if (response) {
                const imageName = `${this.props.profile.id}-${response.fileName}`;
                this.setState({
                    postImage: response.uri,
                    imageName,
                    disabled: false
                });
            } else {
                this.setState({ disabled: true });
            }
        });
    }

    onShareButtonPressed() {
        const { postImage, imageName, title } = this.state;
    }

    render() {
        return (
            <View>
                <View style={{ marginVertical: 10, alignItems: 'center', justifyContent: 'center' }} >
                    <Avatar
                        large
                        rounded
                        onPress={this.onSelectPostImage.bind(this)}
                        source={{ uri: this.state.postImage }}
                    />
                </View>

                <FormLabel>Title</FormLabel>
                <FormInput
                    autoCorrect={false}
                    autoFocus
                    onChangeText={(title) => this.setState({ title })}
                />

                {this.showErrorMessage()}

                <Button
                    title='Share'
                    backgroundColor={Colors.blue}
                    buttonStyle={{ marginTop: 20 }}
                    disabled={this.state.disabled}
                    onPress={this.onShareButtonPressed.bind(this)}
                    loading={this.props.loading}
                />

            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        profile: state.auth.profile,
        loading: state.posts.loading,
        error: state.posts.error,
        added: state.posts.added
    };
};

//make this component available to the app
export default connect(mapStateToProps)(AddPost);
