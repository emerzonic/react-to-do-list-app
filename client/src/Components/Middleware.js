import React from 'react';
import { Redirect } from 'react-router'
import Todo from './Todo/Todo'


const Middleware = () => (
            <div>
                {localStorage.getItem('user')?
                <Todo/>:<Redirect to='/login'/>
                }
            </div>
         );
     
export default Middleware;