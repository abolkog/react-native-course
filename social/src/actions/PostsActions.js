import {
    ADDING_FAILED,
    ADDING_POST,
    ADDING_SUCCESS,
    FETCHING,
    FETCHING_DONE
} from './types';

import firebase from '../firebase';
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
                        dispatch({ type: ADDING_SUCCESS });
                    })
                    .catch(error => handleError(dispatch, error.message));
            })
            .catch(error => handleError(dispatch, error.message));
    };
};

export const fetchPosts = () => {
    return (dispatch) => {
        
        dispatch({ type: FETCHING });

        firebase.database().ref('posts')
            .limitToLast(30)
            .on('value', (snapshot) => {
                const data = snapshot.val() || [];
                handleData(dispatch, data);
            });
    };
};

const handleData = (dispatch, data) => {
    const posts = [];
    Object.values(data).forEach(item => {
        posts.unshift(item);
    });

    dispatch({ type: FETCHING_DONE, payload: posts });
};

const handleError = (dispatch, error) => {
    dispatch({ type: ADDING_FAILED, payload: error });
};