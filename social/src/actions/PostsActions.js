import {
    ADDING_FAILED,
    ADDING_POST,
    ADDING_SUCCESS
} from './types';

import firebase from '../firebease';
import { uploadImage } from './Helper';

export const addPost = (title, author, postImage, imageName) => {
    return (dispatch) => {

        dispatch({ type: ADDING_POST });

        uploadImage(postImage, 'posts', imageName)
            .then((url) => {

                const postToSave = {
                    title,
                    author,
                    url
                };

                firebase.database().ref('posts').push(postToSave)
                    .then(() => {
                        dispatch({ type: ADDING_SUCCESS })
                    })
                    .catch(erro => handleError(dispatch, error.message));
            })
            .catch(erro => handleError(dispatch, error.message));
    };
};


const handleError = (dispatch, error) => {
    dispatch({ type: ADDING_FAILED, payload: error });
};