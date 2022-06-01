import logo from './img/logo.jpg';
import './App.css';


function App() {
return (

  <div className="App">
      <div className='logo object-contain h-48 w-96'>
        <img
          className='logo'
          src ={logo}
          alt='logo' />
      </div>
  </div>
);

}


export default App;