import React from 'react';
import {
    Component
} from 'react';
import API from "../../API/serverRequests";
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
                API.addNewTodos(userId, todo)
                    .then(() => {
                        this.getTodos()
                    })
            }, 1000);
        }


        this.handleDelete = e => {
            e.preventDefault();
            let todoId = e.target.getAttribute('data-id');
            API.deleteTodos(todoId)
                .then(() => {
                    this.getTodos()
                })
        }


        this.toggleComplete = e => {
            e.preventDefault();
            let status = e.target.getAttribute('class');
            if (status === 'pending') {
                e.target.setAttribute('class', 'complete');
            } else {
                e.target.setAttribute('class', 'pending');
            }
        }
    }

    getTodos = () => {
        let userId = localStorage.getItem('todo_app_user_id')
        API.getAllTodos(userId)
            .then(res => {
                this.setState({
                    todos: res.data,
                    todoText: ''
                })
            })
            .catch(err => console.log(err));
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