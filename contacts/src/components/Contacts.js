//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

// create a component
class Contacts extends Component {
    renderContact({ item }) {
        return <Text>{item.name}</Text>;
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.contacts}
                    renderItem={this.renderContact}
                    keyExtractor={item => item.id }
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
});

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    };
};
//make this component available to the app
export default connect(mapStateToProps)(Contacts);
