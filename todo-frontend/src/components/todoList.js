import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo , updateTodo , deleteTodo } from '../actions/todoActions';
import ToDoListTemplate  from '../templates/todoList';

class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            todoTitle:'',
            todoStatus:0,
            editForm:0,
        }
    }

    componentDidMount() {
        let bucketId = this.props.bucketParams.params.bucket
        this.props.fetchTodo(bucketId);
    }

    componentWillReceiveProps(nextProps,nextState) {
        if (typeof nextProps.todo.todoTitle !== 'undefined') {
            this.props.todos.unshift(nextProps.todo);
        }
        if (typeof nextProps.updatedItem._id !== 'undefined') {
            let todItems = this.props.todos;
            todItems.map((item)=>{
                if(item._id == nextProps.updatedItem._id){
                    item.todoTitle = nextProps.updatedItem.todoTitle
                    item.todoStatus = nextProps.updatedItem.todoStatus
                }
                return item
            })
        }
        if(typeof nextProps.deletedItemId._id !== 'undefined'){
            let todItems = this.props.todos;
            for(let i=0;i<todItems.length;i++){
                if(nextProps.deletedItemId._id == todItems[i]._id){
                    this.props.todos.splice(i,1)
                }
            }

        }
    }

    onChange(e) {
        this.setState({todoTitle:e.target.value});
    }

    cancelEdit(e){
        this.setState({editForm:0});
    }

    submitTodo(e){
        e.preventDefault();
        this.setState({editForm:0});
        const post = {
            bucketId:this.props.bucketParams.params.bucket,
            todoTitle:this.state.todoTitle,
            todoStatus:this.state.todoStatus
        }

        this.props.updateTodo(this.state.id,post)
    }

    todoDone(item){
        const post = {
            bucketId:this.props.bucketParams.params.bucket,
            todoTitle:item.todoTitle,
            todoStatus:1
        }

        this.props.updateTodo(item._id,post)
    }

    todoDelete(item){
        const post = {
            bucketId:this.props.bucketParams.params.bucket,
        }
        this.props.deleteTodo(item._id,post)
    }

    todoEdit(item){
        this.setState((prevState, props) => {
            let current = prevState;
            current.todoTitle = item.todoTitle;
            current.id = item._id;
            current.todoStatus =item.todoStatus;
            current.editForm = 1;
            return current;
        })

    }

    render() {
        return ToDoListTemplate.call(this);
    }
}

const mapStateToProps = state => ({
    todos:state.todos.items,
    todo: state.todos.item,
    updatedItem:state.todos.updatedItem,
    deletedItemId:state.todos.deletedItemId

});

export default connect(mapStateToProps, { fetchTodo , updateTodo , deleteTodo})(ToDoList);