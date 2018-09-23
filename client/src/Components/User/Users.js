import React from 'react';
import {
    Component
} from 'react';
import axios from "axios";
import Login from "./Login";
import SignUp from './SignUp';
import Signout from './LogOut';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: false,
            signupError: false
        };

        //This method handles user sign up
        this.handleUserSignup = (newUser) => {
            axios.post('/signup', newUser).then(res => {
                if (res.data.username) {
                    this.storeUserData(res)
                } else {
                    this.props.history.push('/signup');
                }
            }).catch(err => console.log(err));
        }

        //This method handles user signin
        this.handleUserSignin = (user) => {
            axios.post('/signin', user).then(res => {
                if (res.data.username) {
                    this.storeUserData(res)
                } else {
                    this.props.history.push('/login');
                }
            }).catch(err => console.log(err));
        }

        //This method handles user signout
        this.handleUserSignout = (action) => {
            if (action === "positive") {
                localStorage.removeItem('todo_app_user_id');
                localStorage.removeItem('user');
                this.props.history.push('/');
            } else {
                this.props.history.goBack();
            }
        }

        this.storeUserData = (res) => {
            localStorage.setItem('user', res.data.username)
            localStorage.setItem('todo_app_user_id', res.data._id)
            this.props.history.push('/todos');
        }
    }
    render() {
        return (
            <div>
                {this.props.match.path === '/signup'?
                    <SignUp handleUserSignup={this.handleUserSignup} {...this.props}/>:
                    this.props.match.path === '/signout'? 
                    <Signout handleUserSignout={this.handleUserSignout}/>:
                    <Login handleUserSignin={this.handleUserSignin} {...this.props}/>
                } 
            </div>
        );
    }
}

export default User;