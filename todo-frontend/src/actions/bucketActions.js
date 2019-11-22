import { FETCH_BUCKET, NEW_BUCKET } from './types';

export const createBucket = (post) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: NEW_BUCKET,
                payload: posts
            })
        );
};