import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBucket } from '../actions/bucketActions';
import { Link } from 'react-router-dom';

class BucketList extends Component {

    componentDidMount() {
        this.props.fetchBucket();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bucket) {
            this.props.buckets.unshift(nextProps.bucket);
        }
    }


    render() {
          const buckets = this.props.buckets.map(item => (
              <li className="list-group-item" key={item._id}>
                  <div key={item._id} className="bucket-text">
                      <Link to={item._id} className="link">{item.bucketName}</Link>
                  </div>
                  <span className="total-todo-iems">{item.todoList.length}</span>
              </li>
          ));

        return (
            <div className="bucket-list-container">
                <ul className="list-group list-group-flush">
                    {buckets}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    buckets:state.buckets.items,
    bucket: state.buckets.item
});

export default connect(mapStateToProps, { fetchBucket })(BucketList);