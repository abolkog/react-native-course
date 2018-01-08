import React from 'react';
import { TabNavigator } from 'react-navigation';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Home from '../components/Home';
import Profile from '../components/Profile';

import Colors from '../constants/Colors';

import { AddButton, LogoutButton } from './HeaderButtons';

const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerRight: <AddButton navigation={navigation} />,
            headerLeft: <LogoutButton navigation={navigation}/>,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <FAIcon 
                        name='home'
                        size={25}
                        color={tintColor}
                    />
                );
            }
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: <LogoutButton navigation={navigation} />,
            tabBarIcon: ({ tintColor }) => {
                return (
                    <MIcon
                        name='account-circle'
                        size={25}
                        color={tintColor}
                    />
                );
            }
        })
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        inactiveTintColor: Colors.blue,
        activeTintColor: Colors.redColor,
        pressColor: Colors.redColor,
        indicatorStyle: { backgroundColor: Colors.redColor },
        style: {
            backgroundColor: Colors.white
        }
    }
});

export default Tabs;