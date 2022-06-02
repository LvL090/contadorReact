import logo from './img/logo.png';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import { useState } from 'react';

function App() {

  const [numClicks,setNumClicks] = useState (0);

const handleClick = () => {

  setNumClicks(numClicks + 1);
  
}
const resetCounter = () => {

  setNumClicks(0);
  
  
}

return (

  <div className="App h-screen">
      <div className='logo object-contain h-48 w-52 mb-8'>
        <img
          className='logo'
          src ={logo}
          alt='logo' />
      </div>
      <div className='container flex flex-wrap flex-col align-center justify-center'>
        <p className='min-w-[50%] h-38 text-3xl p-3 flex justify-center   mb-2'>Count your clicks!</p>
        <Counter  numClicks={ numClicks }/>
        <Button
            text='Click'
            click={true}
            handleClick={handleClick} />
        <Button
          text='restart'
          click={false}
          handleClick={resetCounter} />
      </div>
  </div>
);

}


export default App;
