import { StackNavigator } from 'react-navigation';

import Login from '../components/Login';
import Signup from '../components/Signup';
import AddPost from '../components/AddPost';

import Colors from '../constants/Colors';

import Tabs from './Tabs';


const Navigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Signup'
        }
    },
    Main: {
        screen: Tabs
    },
    Add: {
        screen: AddPost,
        navigationOptions: {
            title: 'Share Image'
        }
    }
    
}, {
    navigationOptions: {
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