import React, { Component} from 'react';
import TodoForm from "./todoForm";
import ToDoList from "./todoList";


class TodoComponent extends Component{
    render(){
        return (
            <div>
                <h1 className="display-4 text-primary text-xs-center p-b-1 m-b-1">Todo App </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <TodoForm bucketParams={this.props.match}/>
                            <hr></hr>
                            <ToDoList bucketParams={this.props.match}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default  TodoComponent;
//export default connect(mapStateToProps, {  })(TodoComponent);



