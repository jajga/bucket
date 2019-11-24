import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBucket } from '../actions/bucketActions';



class BucketForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bucket: ''
        };
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            bucketName : this.state.bucket,
        };

        this.props.createBucket(post);
    }

    render() {


        return (
            <div className="container">
                <form className="form-signin top-form" onSubmit={(event)=>{this.onSubmit(event)}}>
                    <div className="form-label-group">
                        <input  type="text"
                                placeholder="Add Bucket..."
                                name="bucket"
                                onChange={(event)=>{this.onChange(event)}}
                                value={this.state.bucket} id="bucketTitile" className="form-control"
                                required autoFocus />

                        <div className="input-group-append button-container" >
                            <button type="submit" className="btn btn-lg btn-success add-buckt-btn btn-block text-uppercase">Add Bucket</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    bucket: state.buckets.item,
    buckets:state.buckets.items,
});

export default connect(mapStateToProps, { createBucket })(BucketForm);