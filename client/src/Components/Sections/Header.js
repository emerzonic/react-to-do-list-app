import React from 'react';
import { Link } from "react-router-dom";
// import './home.css';

const Header = () => (
    <div className="ui segments">
        <div className="ui green segment">
        <h1>TODO LIST APP</h1>
        </div>
        <div className="ui secondary segment">
        <p>Never miss out on your important tasks</p>
        {localStorage.getItem('user')?
        <div className="right floated content">
            <Link to={"/signout"} className="ui green button">Sign Out</Link>
        </div>
        :""}
        </div>
    </div>
);

export default Header;