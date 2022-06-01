import logo from './img/logo.png';
import './App.css';
import Button from './components/button';


function App() {

const handleClick = () => {

  console.log('Clicked!');
  
}
const resetCounter = () => {

  console.log('Reset!');
  
}

return (

  <div className="App min-h-screen">
      <div className='logo object-contain h-48 w-52'>
        <img
          className='logo'
          src ={logo}
          alt='logo' />
      </div>
      <div className='container'>
        <Button
            text='Click'
            click={true}
            handleClick={handleClick}/>
        <Button
          text='restart'
          click={false}
          handleClick={resetCounter}/>
      </div>
  </div>
);

}


export default App;
