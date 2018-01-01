import { StackNavigator } from 'react-navigation';

import Contacts from './components/Contacts';
import Details from './components/Details';

const Routes = StackNavigator({
    contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contact'
        }
    },
    details: {
        screen: Details,
        navigationOptions: {
            title: 'Details'
        }
    }
});

export default Routes;
