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
        navigationOptions: () => ({
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
        navigationOptions: () => ({
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


//React Nav V2 Header button Work Around

Tabs.navigationOptions = ({ navigation }) => {
    const { state: { routes, index } } = navigation; 
    const navigationOptions = {};

    //
    if (routes[index].routeName === 'Home') {
        navigationOptions.title = 'Home';
        navigationOptions.headerRight = <AddButton navigation={navigation} />;
        navigationOptions.headerLeft = (<LogoutButton navigation={navigation} />);
    }

    if (routes[index].routeName === 'Profile') {
        navigationOptions.title = 'Profile';
        navigationOptions.headerLeft = (<LogoutButton navigation={navigation} />);
    }

    return navigationOptions;
};

export default Tabs;