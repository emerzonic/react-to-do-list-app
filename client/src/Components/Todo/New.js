import React from 'react';

const TodoForm = (props) => (
            <form className="ui form" onSubmit={props.handleSubmit}>
                <div className="field">
                    <div className="ui fluid action input">
                            <input onChange={props.hanldeOnChange} type="text" name="todoText" placeholder="Add new task to todo list" 
                                  />
                        <button className="ui button" type="submit"><i className="plus icon"></i></button>
                    </div>   
                </div> 
            </form>  
            )

export default TodoForm;