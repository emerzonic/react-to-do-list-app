import React from 'react';
import '../../App.css'

const SubmitButton = (props) => (
    <button type="submit"
            className="ui fluid blue basic button submit-button">
                {props.match.path === '/login'?'Login':'Submit'}
    </button>
);

export default SubmitButton;