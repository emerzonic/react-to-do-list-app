import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router'
import '../App.css';



class  Middleware extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return (
            <div>
            {localStorage.getItem('user')?
            <Redirect to='/todos'/>:<Redirect to='/login'/>
            }
            </div>
         );
    }
}
 
export default Middleware;