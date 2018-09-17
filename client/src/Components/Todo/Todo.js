import React from 'react';
import { Component } from 'react';
// import './save.css';
// import Moment from 'moment';


class Todo extends Component {
  constructor(props) {
      super(props);    
    }
      render() { 
        //   console.log(this.props)
        return ( 
            <div className="ui middle aligned divided list">
                {this.props.todos.length > 0 ? this.props.todos.map((todo, i) =>
                    <div className="item todo-item" key={todo._id}>
                    <div className="left floated content delete-button">
                        <div className="ui red icon button delete-button">
                        <i className="trash icon" 
                            data-id={todo._id} 
                            onClick={this.props.handleDelete} ></i>
                        </div>
                    </div>
                    <div className="content">
                      <span>{todo.title}</span>
                    </div>
                  </div>
                ):""}
                </div>    
            )
        }
}

export default Todo;
 
