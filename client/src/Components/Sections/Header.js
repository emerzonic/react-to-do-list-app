import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="ui segments">
        <div className="ui green segment">
        <h1>TODO LIST</h1>
        </div>
        <div className="ui secondary segment">
        <p>Never miss out on your important tasks.</p>
        {localStorage.getItem('user')?
        <div className="right floated content">
            <Link to={"/signout"} className="ui fluid teal basic button">Sign Out</Link>
        </div>
        :""}
        </div>
    </div>
);

export default Header;