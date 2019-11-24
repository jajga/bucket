import React from "react";

const ToDoListTemplate = function(props){
    const todoList = this.props.todos.map(item => (
        <li className="list-group-item" key={item._id}>
            <div className="text-control-grp pull-left">
                <span style={{ display: !item.todoStatus ? "block" : "none" }}>{item.todoTitle}</span>
                <span style={{ display: item.todoStatus ? "block" : "none" }}><del>{item.todoTitle}</del></span>
            </div>
            <div className="btn-control-grp pull-right">
                <button className='btn btn-sm btn-primary' onClick={(event)=>{this.todoEdit(item)}}>Edit</button>
                <button className='btn btn-sm btn-success' onClick={(event)=>{this.todoDone(item)}}>Done</button>
                <button className='btn btn-sm btn-danger' onClick={(e) => {this.todoDelete(item)}}>Delete</button>
             </div>
        </li>
    ));
    return (
        <div className="bucket-list-container">
            <form style={{ display: this.state.editForm ? "block" : "none" }} onSubmit={(event)=>{this.submitTodo(event)}}>
                <div className="edit-frm-container">
                    <br />
                    <input
                        type="text"
                        name="todoTitle"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.todoTitle}
                    />
                    <button type="submit" className='btn btn-success text-uppercase'>Submit</button>
                    <button  onClick={(e)=>{this.cancelEdit()}} className='btn btn-danger text-uppercase'>Cancel</button>
                </div>

            </form>
            <ul className="list-group list-group-flush">
                {todoList}
            </ul>
        </div>
    )
}

export default ToDoListTemplate;