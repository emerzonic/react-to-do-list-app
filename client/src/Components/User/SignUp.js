import React from 'react';
import {
    Component
} from 'react';
import { Link } from "react-router-dom";
import UsernameInput from '../Sections/UsernameInput';
import PasswordInput from '../Sections/PasswordInput';
import SubmitButton from '../Sections/SubmitButton';


class SignUp extends Component {
    constructor(props) {
        super(props);
        console.log(this)
    
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
    return (
            <form className="ui form user-form" onSubmit={this.handleSubmit}>
            <h3 className="form-heading">Sign Up</h3>
            <div className="ui divider"></div>
                <UsernameInput/>
                <PasswordInput/>
                <SubmitButton {...this.props}/>
                <label>Already have an account? </label>
            <Link  className="ui item user-link" to={"/login"}>Login here</Link>
            <div className="ui error message"></div>
        </form>
        );
    }
}
 
export default SignUp;