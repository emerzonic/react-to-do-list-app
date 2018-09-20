import React from 'react';

const PasswordInput = () => (
    <div className="required field">
        <label>Password</label>
        <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
        </div>
    </div>
);

export default PasswordInput;