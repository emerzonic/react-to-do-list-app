import React from 'react';
import {
    Component
} from 'react';
import API from "../../API/serverRequests";
import Todo from './Todo'
import TodoForm from './New';
// import './save.css';


class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todoText:'',
            error:false
        }

        this.handleOnChange = (e) => {
            let target = e.target;
            let value = target.value;
            let name  = target.name;
            this.setState({
                [name]:value,
                error:this.state.todoText.length?false:true,
            })
        }

        this.handleSubmit = e =>{
            e.preventDefault();
            let todo = {
                title:this.state.todoText
            }
            e.target.reset()
            let userId = localStorage.getItem('todo_app_user_id')
            API.addNewTodos(userId,todo)
                .then(() => {
                    this.getTodos()
                })
          }


        this.handleDelete = e => {
            e.preventDefault();
            let todoId = e.target.getAttribute('data-id');
            console.log(todoId)
            // API.deleteTodo(todoId)
                // .then(() => {
                //     this.getTodos()
                // })
        }
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        let userId = localStorage.getItem('todo_app_user_id')
        API.getAllTodos(userId)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
    };
    render() {
        // console.log(this.state)
        return (
            <div>
                <TodoForm hanldeOnChange={this.handleOnChange} 
                          handleSubmit={this.handleSubmit}/>
                <Todo handleDelete={this.handleDelete} todos={this.state.todos}/>
        </div>
        );
    }
}

export default Todos;