import {
    ADDING_FAILED,
    ADDING_POST,
    ADDING_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', added: false };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADDING_POST: 
            return { ...state, loading: true};
        case ADDING_SUCCESS: 
            return { ...state, loading: false, added: true};
        case ADDING_FAILED:
            return { ...state, loading: false, added: false, error: action.payload };
        default:
            return state;
    }
};