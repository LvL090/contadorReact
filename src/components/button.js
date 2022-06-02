import React from 'react';

function Button({text, click, handleClick}){
    return (
        <button
            className={`${ click ? 'bg-blue-300 hover:bg-blue-500 text-blue-700 hover:bg-blue-500 border-blue-500' : 'bg-green-300 hover:bg-green-500 text-green-700 hover:bg-green-500 border-green-500'} bg-transparent font-semibold hover:text-white py-2 px-4 m-2 border hover:border-transparent rounded`}
            onClick={handleClick}  >
                {text}
        </button>
    );
}

export default Button;