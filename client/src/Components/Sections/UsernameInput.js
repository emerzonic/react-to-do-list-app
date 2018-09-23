import React from 'react';

const UsernameInput = () => (
    <div className="required field">
        <label>Username</label>
        <div className="ui left icon input"> 
            <i className="user icon"></i>
            <input className='usernameInput' name="username" placeholder="Username" type="text" autoComplete="off"/>
        </div>
    </div>
);

export default UsernameInput;