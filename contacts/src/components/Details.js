// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card, CardItem, Button } from './common';

// create a component
class Details extends Component {
    render() {
        return (
           <Card>
            <CardItem>
                <View style={styles.container}>
                    <Text style={styles.name} >Contact Name</Text>
                </View>
            </CardItem>

            <CardItem>
                <View style={styles.buttons}>
                    <Button>Call</Button>
                </View>
                <View style={styles.buttons}>
                    <Button>Text</Button>
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

// make this component available to the app
export default Details;
