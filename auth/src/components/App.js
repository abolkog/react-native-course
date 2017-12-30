//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import firebase from '../firebase';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';

// create a component
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });
    }

    showContnets() {
        switch(this.state.loggedIn) {
            case true: 
                return (
                    <View style={styles.logoutContainer}>
                        <Button>Log Out</Button>
                    </View>
                );
            case false: 
                return <LoginForm />;
            default: 
                return <Spinner />;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header title='Auth' />
                { this.showContnets() }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutContainer: {
        height: 80,
        margin: 10
    }
});

//make this component available to the app
export default App;
