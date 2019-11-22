import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBucket } from '../actions/bucketActions';

class BucketComponent extends Component {
    constructor(props) {
        super(props);
         this.state = {
             bucket: ''
         };

        //this.onChange = this.onChange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            bucket_name : this.state.bucket,
        };

        this.props.createBucket(post);
    }

    render() {
        console.log('this.prprs',this.props);

        return (
            <div>
                <h1>Add Bucket</h1>

                <form onSubmit={(event)=>{this.onSubmit(event)}}>
                    <div>
                        <label>Bucket Name: </label>
                        <br />
                        <input
                            type="text"
                            name="bucket"
                            onChange={(event)=>{this.onChange(event)}}
                            value={this.state.bucket}
                        />
                    </div>

                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    buckets: state.buckets.items,
});

export default connect(mapStateToProps, { createBucket })(BucketComponent);