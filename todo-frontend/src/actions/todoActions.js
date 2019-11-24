import { DELETE_TODO , UPDATE_TODO , FETCH_TODO, NEW_TODO} from './types';
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

export const fetchTodo = (bucketId) => dispatch => {
    axios.get('http://localhost:3000/api/todo/'+bucketId)
        .then((res) => dispatch({
            type: FETCH_TODO,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })

};

export const createTodo = (post) => dispatch => {
    let postData = post;

    axios.post('http://localhost:3000/api/todo',postData)
        .then((res) => dispatch({
            type: NEW_TODO,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};

export const updateTodo = (todoId ,post) => dispatch => {
    let postData = post;
    axios.put('http://localhost:3000/api/todo/'+todoId,postData)
        .then((res) => dispatch({
            type: UPDATE_TODO,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};

export const deleteTodo = (todoId ,post) => dispatch => {
    let postData = post;

    axios.post('http://localhost:3000/api/todo/'+todoId,postData)
        .then((res) => dispatch({
            type: DELETE_TODO,
            payload: res.data
        }))
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
};





