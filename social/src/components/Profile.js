//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

// create a component
class Profile extends Component {
    render() {
        const { profile } = this.props;
        return (
            <View>
                <View style={styles.wrapper}>
                    <Avatar 
                        large
                        rounded
                        source={{ uri: profile.imageUrl }}
                    />
                </View>

                <View style={styles.wrapper}>
                    <Text>{profile.name}</Text>
                </View>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const mapStateToprops = state => {
    return {
        profile: state.auth.profile
    };
};
//make this component available to the app
export default connect(mapStateToprops)(Profile);
