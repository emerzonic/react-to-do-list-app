import React from 'react';
import { Redirect } from 'react-router'
import '../App.css';

const Middleware = () => (
            <div>
                {localStorage.getItem('user')?
                <Redirect to='/todos'/>:<Redirect to='/login'/>
                }
            </div>
         );
     
export default Middleware;