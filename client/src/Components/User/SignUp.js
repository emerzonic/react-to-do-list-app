import React from 'react';
import {
    Component
} from 'react';
import { Link } from "react-router-dom";
// import './home.css';


class SignUp extends Component {
    constructor(props) {
        super(props);
    
    this.handleSubmit = e =>{
        e.preventDefault();
        let user = {
            username: e.target.username.value,
            password: e.target.password.value
        };;
        if(!user.username.length ||!user.password.length){ 
            return;
        }else{
            this.props.handleUserSignup(user);
        }
      }
}

render() {
    console.log(this.props)
    return (
            <form id="signinForm" className="ui form" onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <div className="ui divider"></div>
            <div className="required field">
            <label>Username</label>
                <div className="ui left icon input"> <i className="user icon"></i>
                <input name="username" placeholder="Username" type="text" autoComplete="off"/>
                </div>
            </div>
            <div className="required field">
                <label>Password</label>
                <div className="ui left icon input"><i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
            </div>
            </div>
            <button type="submit" className="ui orange button">Submit</button>
            <span>Already have an account? </span>
            <Link  className="ui item" to={"/login"}>Login here</Link>
            <div className="ui error message"></div>
        </form>
        );
    }
}
 
export default SignUp;