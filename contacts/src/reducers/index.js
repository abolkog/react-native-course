import { combineReducers } from 'redux';

import ContactsReducer from './ContactsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    contacts: ContactsReducer,
    selection: SelectionReducer
});
