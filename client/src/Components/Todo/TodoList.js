import React from 'react';
import '../../App.css'
const TodoList = (props) => (
            <div className="ui middle aligned divided list">
                {props.todos.length > 0 ? props.todos.map((todo, i) =>
                    <div className="item todo-item" key={todo._id}>
                    <div className="left floated content delete-button">
                        <div className="ui red icon button delete-button">
                        <i className="trash icon" 
                            data-id={todo._id} 
                            onClick={props.handleDelete} ></i>
                        </div>
                    </div>
                    <div className="content">
                      <span className='pending' onClick={props.toggleComplete}>{todo.title}</span>
                    </div>
                  </div>
                ):""}
                </div>    
            )


export default TodoList;
 
