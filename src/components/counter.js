import React from 'react';



function Counter ({ numClicks }){
    return (
        <div className= 'min-w-[50%] h-38 text-6xl p-3 flex justify-center border-2 rounded-lg border-sky-600 mb-2'>
        {numClicks}
        </div>
    );
}


export default Counter;