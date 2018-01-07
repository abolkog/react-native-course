import {
    ATTEMPTING,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED
} from './types';

import firebase from '../firebease';

export const signup = ({ name, email, password, profileImage }) => {
    return (dispatch) => {
        dispatch({ type: ATTEMPTING });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(resp => handleAccountCreated(dispatch, respo.uid, name, profileImage ))
            .catch(error => handleError(dispatch, error.message));
    };
};

const handleAccountCreated = (dispatch, userId, name, profileImage ) => {
    //Upload the image
};

const handleError = (dispatch, message) => {
    dispatch({ type: SIGNIN_FAILED, payload: message });
};