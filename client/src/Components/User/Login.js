import React from 'react';
import {
    Component
} from 'react';
import { Link } from "react-router-dom";
import UsernameInput from '../Sections/UsernameInput';
import PasswordInput from '../Sections/PasswordInput';
import SubmitButton from '../Sections/SubmitButton';

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
        <form className="ui form user-form" onSubmit={this.handleSubmit}>
        <h3 className="form-heading">Login</h3>
        <div className="ui divider"></div>
            <UsernameInput/>
            <PasswordInput/>
            <SubmitButton {...this.props}/>
        <label>Don't have an account?</label>
        <Link  className="ui item user-link" to={"/signup"}>Sign Up</Link>
        <div className="ui error message"></div>
      </form>

    );
}
}
 
export default Login;