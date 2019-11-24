import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todoActions';



class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todoStatus:0
        };

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            bucketId : this.props.bucketParams.params.bucket,
            todoTitle : this.state.todo,
            todoStatus : this.state.todoStatus
        };


        this.props.createTodo(post);
    }

    render() {

        return (
            <div className="container">
                    <form className="form-signin top-form todo-form" onSubmit={(event)=>{this.onSubmit(event)}}>
                        <div className="form-label-group">
                            <input  type="text"
                        name="todo"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.todo} id="todoTitile" className="form-control"
                        required autoFocus />

                            <div className="input-group-append button-container" >
                            <button type="submit" className="btn btn-lg btn-success btn-block text-uppercase">Add Todo</button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    todos:state.todos.items,
    todo: state.todos.item
});

export default connect(mapStateToProps, { createTodo })(TodoForm);