import React from 'react';
import { TouchableOpacity } from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';
import firebase from '../firebase';

export const AddButton = ({ navigation }) => {
    return (
        <TouchableOpacity 
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('Add')}
        >
            <MIcon 
                name='add-circle'
                size={30}
                color={Colors.white}
            />
        </TouchableOpacity>
    );
};

export const LogoutButton = ({ navigation }) => {
    return (
        <TouchableOpacity 
            onPress={() => logout(navigation)}
            style={{ marginLeft: 10 }}
        >
            <FAIcon
                name='sign-out'
                size={30}
                color={Colors.white}
            />
        </TouchableOpacity>
    );
};

const logout = (navigation) => {
    firebase.auth().signOut();
    navigation.navigate('Login');
};