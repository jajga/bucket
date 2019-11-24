import { FETCH_BUCKET, NEW_BUCKET } from './types';
import axios from "axios";

    // Add a request interceptor
    axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    },
    error => {
        Promise.reject(error)
    });

export const fetchBucket = () => dispatch => {

    axios.get('http://localhost:3000/api/bucket')
        .then((res) => dispatch({
            type: FETCH_BUCKET,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })

};

export const createBucket = (post) => dispatch => {
    let postData = {
        bucketName:post.bucketName
    };

    axios.post('http://localhost:3000/api/bucket', postData)
        .then((res) => dispatch({
            type: NEW_BUCKET,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })

};