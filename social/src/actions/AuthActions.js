import {
    ATTEMPTING,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED
} from './types';

import firebase from '../firebease';
import { uploadImage } from './Helper';
export const signup = ({ name, email, password, profileImage }) => {
    return (dispatch) => {
        dispatch({ type: ATTEMPTING });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(resp => handleAccountCreated(dispatch, resp.uid, name, profileImage ))
            .catch(error => handleError(dispatch, error.message));
    };
};

const handleAccountCreated = (dispatch, userId, name, profileImage ) => {
    //Upload the image
    const imageName = `${userId}.jpg`;
    uploadImage(profileImage, 'profiles', imageName)
        .then((url) => {
            firebase.database().ref(`profiles/${userId}`)
                .set({ name, imageUrl: url })
                .then(() => { dispatch({ type: SIGNIN_SUCCESS}) })
                .catch(error => handleError(dispatch, error.message));
        })
        .catch(error => handleError(dispatch, error.message));
};

const handleError = (dispatch, message) => {
    dispatch({ type: SIGNIN_FAILED, payload: message });
};