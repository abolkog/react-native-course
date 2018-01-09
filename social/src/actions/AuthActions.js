import {
    ATTEMPTING,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS
} from './types';

import firebase from '../firebase';
import { uploadImage } from './Helper';


export const signup = ({ name, email, password, profileImage }) => {
    return (dispatch) => {
        dispatch({ type: ATTEMPTING });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(resp => handleAccountCreated(dispatch, resp.uid, name, profileImage))
            .catch(error => handleError(dispatch, error.message));
    };
};

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: ATTEMPTING });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => handleLoginSuccess(dispatch, resp.uid))
            .catch(error => handleError(dispatch, error.message));
    };
};

const handleLoginSuccess = (dispatch, userId) => {
    firebase.database().ref(`profiles/${userId}`)
        .on('value', (snapshot) => {
            const data = snapshot.val();
            const profile = {
                id: userId,
                name: data.name,
                imageUrl: data.imageUrl
            };

            dispatch({ type: LOGIN_SUCCESS, payload: profile });
        });
};

const handleAccountCreated = (dispatch, userId, name, profileImage) => {
    //Upload the image
    const imageName = `${userId}.jpg`;
    uploadImage(profileImage, 'profiles', imageName)
        .then((url) => {
            firebase.database().ref(`profiles/${userId}`)
                .set({ name, imageUrl: url })
                .then(() => { dispatch({ type: SIGNUP_SUCCESS }); })
                .catch(error => handleError(dispatch, error.message));
        })
        .catch(error => handleError(dispatch, error.message));
};

const handleError = (dispatch, message) => {
    dispatch({ type: SIGNUP_FAILED, payload: message });
};