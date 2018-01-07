import {
    ATTEMPTING,
    SIGNIN_FAILED,
    SIGNIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', profile: null, signedup: false };
export default(state = INITIAL_STATE , action) => {
    switch(action.type) {
        case ATTEMPTING: 
            return { ...state, loading: true  }
        default: 
            return state;
    };
};