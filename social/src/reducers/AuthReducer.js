import {
    ATTEMPTING,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', profile: null, signedup: false };
export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ATTEMPTING: 
            return { ...state, loading: true, profile: null };
        case SIGNUP_FAILED: 
            return { ...state, loading: false, error: action.payload, profile: null };
        case SIGNUP_SUCCESS:
            return { ...state, loading: false, signedup: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, profile: action.payload, error: '' };
        default: 
            return state;
    }
};