import React from 'react';

function Button({text, click, handleClick}){
    return (
        <button
            className={ click ?'button-click' : 'button-restart' }
            onClick={handleClick}>
                {text}
        </button>
    );
}

export default Button;