//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// create a component
class Contacts extends Component {
    
    onContactSelected(contact) {
        console.log(contact);
    }
    renderContact({ item }) {
        return (
            <View style={styles.contact}>
                <TouchableOpacity onPress={this.onContactSelected.bind(this, item)} >
                    <Text style={styles.name} >{item.name}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.contacts}
                    renderItem={this.renderContact.bind(this)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contact: {
        flex: 1,
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    name: {
        fontSize: 16
    },
    phone: {
        fontSize: 14,
        color: '#ddd'
    }
});

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };
};
//make this component available to the app
export default connect(mapStateToProps)(Contacts);
