import React from 'react';

function Checkbox(props) {
    return (
        <label className="Controls__easy">
            <input
                className="Controls__checkbox"
                type="checkbox"
                onChange={props.handleChange} />
            {props.text}
        </label>
    );
};

export default Checkbox;
