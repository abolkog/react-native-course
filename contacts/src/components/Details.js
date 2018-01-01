// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Button } from './common';

// create a component
class Details extends Component {

    callContact() {
        const phone = this.props.contact.phone;
        const url = `tel:${phone}`;
        this.lanuchUrl(url);
    }

    textContact() {
        const phone = this.props.contact.phone;
        const url = `sms:${phone}`;
        this.lanuchUrl(url);
    }

    lanuchUrl(url) {
        Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    Alert.alert('App Not supported');
                } else {
                    Linking.openURL(url);
                }
            });
    }
    
    render() {
        return (
           <Card>
            <CardItem>
                <View style={styles.container}>
                    <Text style={styles.name} >{this.props.contact.name}</Text>
                </View>
            </CardItem>

            <CardItem>
                <View style={styles.buttons}>
                    <Button onPress={this.callContact.bind(this)} >Call</Button>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={this.textContact.bind(this)}>Text</Button>
                </View>
            </CardItem>

           </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    name: {
        fontSize: 18
    },
    buttons: {
        flex: 1,
        height: 70,
        marginHorizontal: 10
    }
});

const mapStateToProp = state => {
    return {
        contact: state.selection.contact
    };
};

// make this component available to the app
export default connect(mapStateToProp)(Details);
