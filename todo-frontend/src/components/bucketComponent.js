import React from "react";
//import TodoComponent from './components/todoComponent';
import BucketForm from './bucketForm';
import BucketComponent from './bucketList';

const Bucket = () => {
    return (
        <div>
            <h1 className="display-4 text-primary text-xs-center p-b-1 m-b-1">Todo App </h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                            <BucketForm />
                            <hr></hr>
                            <BucketComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bucket;