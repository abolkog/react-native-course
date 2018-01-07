import { StackNavigator } from 'react-navigation';

import Login from '../components/Login';
import Signup from '../components/Signup';
import AddPost from '../components/AddPost';

import Colors from '../constants/Colors';

import Tabs from './Tabs';


const Navigator = StackNavigator({
    Main: {
        screen: Tabs
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Signup'
        }
    },
    Add: {
        screen: AddPost
    }
    
}, {
    navigationOptions : {
        headerStyle: {
            backgroundColor: Colors.redColor
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
            color: Colors.white,
            fontSize: 20
        }
    }
});

export default Navigator;