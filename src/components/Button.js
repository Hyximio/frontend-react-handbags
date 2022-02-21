import React from 'react';

function Button( {name, disabled} ) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => console.log( `Clicked on '${name}'`)}
        >{name}
        </button>
    )
}

export default Button;