import { StackNavigator } from 'react-navigation';

import Contacts from './components/Contacts';
import Details from './components/Details';

const Routes = StackNavigator({
    contacts: {
        screen: Contacts
    },
    details: {
        screen: Details
    }
});

export default Routes;