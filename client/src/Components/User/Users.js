import React from 'react';
import {
    Component
} from 'react';
import API from "../../API/serverRequests";
import Login from "./Login";
import SignUp from './SignUp';
import Signout from './LogOut';
// import './home.css';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                _id: '',
                username: ''
            }
        };

        //Fires when the signup form is submitted
        this.handleUserSignup = (newUser) => {
            API.sendNewUserData(newUser).then(res => {
                if (res.data.username) {
                    localStorage.setItem('user', res.data.username)
                    localStorage.setItem('todo_app_user_id', res.data._id)
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('user')
                        }
                    })
                    this.props.history.push('/todos');
                } else {
                    this.props.history.push('/signup');
                }
            }).catch(err => console.log(err));
        }

        //Fires when the login form is submitted
        this.handleUserSignin = (user) => {
            // console.log(user)
            API.sendLoginData(user).then(res => {
                if (res.data.username) {
                    localStorage.setItem('user', res.data.username)
                    localStorage.setItem('todo_app_user_id', res.data._id)
                    this.setState({
                        user: {
                            id: res.data._id,
                            username: localStorage.getItem('user')
                        }
                    })
                    this.props.history.push('/todos');
                } else {
                    this.props.history.push('/login');
                }
            }).catch(err => console.log(err));

        }

        //This method handle user signout
        this.handleUserSignout= (action) => {
            if(action === "positive"){
            localStorage.removeItem('todo_app_user_id');
            localStorage.removeItem('user');
            localStorage.removeItem('todos');
            this.props.history.push('/');
            }else{
            this.props.history.goBack();
            }
        }
    }
    render() {
        return (
            <div>
                {this.props.match.path === '/signup'?
                    <SignUp handleUserSignup={this.handleUserSignup}/>:
                    this.props.match.path === '/signout'? 
                    <Signout handleUserSignout={this.handleUserSignout}/>:
                    <Login handleUserSignin={this.handleUserSignin}/>} 
            </div>
        );
    }
}

export default User;