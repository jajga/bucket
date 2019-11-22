import { FETCH_TODO, NEW_TODO } from './types';

export const createTodo = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: NEW_TODO,
                payload: posts
            })
        );
};