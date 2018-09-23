import React from 'react';
import {
    Component
} from 'react';
import axios from "axios";
import TodoList from './TodoList'
import TodoForm from './New';
import '../../App.css'



class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoText: '',
            error: false,
        }

        this.handleOnChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name = target.name;
            this.setState({
                [name]: value,
            })
        }

        this.handleSubmit = e => {
            e.preventDefault();
            this.setState({
                error: this.state.todoText.length >= 3 ? false : true,
            })
            e.target.reset()
            setTimeout(() => {
                if (this.state.error) {
                    return;
                }
                let todo = {
                    title: this.state.todoText
                }
                let userId = localStorage.getItem('todo_app_user_id')
                axios.post('/todos/new/' + userId, todo).then(() => 
                    this.getTodos()
                )
            }, 1000);
        }


        this.handleDelete = e => {
            e.preventDefault();
            let todoId = e.target.getAttribute('data-id');
            axios.delete("/" + todoId).then(() => 
                this.getTodos()
            )
        }

        //This method handles todo update
        this.toggleComplete = e => {
            e.preventDefault();
            let newStatus = '';
            let todoId = e.target.getAttribute('data-id');
            let status = e.target.getAttribute('class');
            if (status === 'pending') {
                newStatus = 'Complete';
            } else {
                newStatus = 'Pending';
            }
            let updatedTodo = {
                status: newStatus
            }
            axios.put("/todos/" + todoId, updatedTodo).then(() => 
                this.getTodos()
            )
        }
    }

    //This method retrieves all the user todos from the database
    getTodos = () => {
        let userId = localStorage.getItem('todo_app_user_id')
        axios.get("/todos/" + userId).then(res => 
                this.setState({
                    todos: res.data,
                    todoText: ''
                })
            ).catch(err => console.log(err));
    };

    componentDidMount() {
        this.getTodos();
    }

    render() {
        return (
                <div>
                    <TodoForm hanldeOnChange={this.handleOnChange} 
                            handleSubmit={this.handleSubmit}
                            error={this.state.error}/>
                    <TodoList handleDelete={this.handleDelete} 
                            toggleComplete={this.toggleComplete} 
                            complete={this.state.complete}
                            todos={this.state.todos}/>
                </div>

        );
    }
}

export default Todos;