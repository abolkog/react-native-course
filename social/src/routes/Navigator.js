import { StackNavigator } from 'react-navigation';

import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from '../components/Home';

import Colors from '../constants/Colors';


const Navigator = StackNavigator({
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
    Home: {
        screen : Home
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