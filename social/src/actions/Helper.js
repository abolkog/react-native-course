import RNFetchBlob from 'react-native-fetch-blob';
import { Platform } from 'react-native';
import firebase from '../firebease';

const Blob = RNFetchBlob.polyfill.Blob;
const fs   = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export const uploadImage = (uri, ref, imageName ) => {
    return new Promise((resolve, reject) => {
        const mime = 'image/jpg';
        let uploadBlob = null;
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const imageRef = firebase.storage(ref).child(imageName);

        fs.readFile(uploadUri, 'base64')
        .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64`});
        })
        .then((blob) => {
            uploadBlob =blob;
            return imageRef.put(blob, { contnetType: mime })
        })
        .then(() => {
            uploadBlob.close();
            return imageRef.getDownloadURl();
        })
        .then((url) => {
            resolve(url);
        })
        .catch(erro => { reject (error)});
    });
};