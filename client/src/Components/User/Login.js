import React from 'react';
import {
    Component
} from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
    
    this.handleSubmit = e =>{
        e.preventDefault();
        let preciousUser = {
            username: e.target.username.value,
            password: e.target.password.value
        };;
        if(!preciousUser.username.length ||!preciousUser.password.length){ 
            return;
        }else{
            this.props.handleUserSignin(preciousUser);
        }
      }
}

render() {
    return (
        <form id="signinForm" className="ui form" onSubmit={this.handleSubmit}>
        <h3>Login</h3>
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
        <button type="submit" className="ui blue basic button submit-button">Login</button>
        <label>Don't have an account?</label>
        <Link  className="ui item user-link" to={"/signup"}>Sign Up</Link>
        <div className="ui error message"></div>
      </form>

    );
}
}
 
export default Login;