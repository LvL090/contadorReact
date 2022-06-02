import logo from './img/logo.png';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

function App() {

const handleClick = () => {

  console.log('Clicked!');
  
}
const resetCounter = () => {

  console.log('Reset!');
  
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
        <Counter  numClicks='5'/>
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
