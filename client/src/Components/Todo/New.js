import React from 'react';
import { Component } from 'react';
// import './save.css';
// import Moment from 'moment';


class TodoForm extends Component {
      render() { 
        // console.log(this.props)
        return ( 
            <form className="ui form" onSubmit={this.props.handleSubmit}>
                <div className="field">
                    <div className="ui fluid action input">
                            <input onChange={this.props.hanldeOnChange} type="text" name="todoText" placeholder="Add new task to todo list" 
                                  />
                        <button className="ui button" type="submit"><i className="plus icon"></i></button>
                    </div>   
                </div> 
            </form>  
            )
        }
}

export default TodoForm;