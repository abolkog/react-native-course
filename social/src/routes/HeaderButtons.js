import React from 'react';
import { TouchableOpacity } from 'react-native';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

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
}

export const LogoutButton = ({ navigation }) => {
    return (
        <TouchableOpacity style={{ marginLeft: 10 }}>
            <FAIcon
                name='sign-out'
                size={30}
                color={Colors.white}
            />
        </TouchableOpacity>
    );
}