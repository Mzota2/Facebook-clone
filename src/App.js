
import './App.css';
import React from 'react';
import Menu from './components/Menu';
import Feed from './components/Feed';
import Friends from './components/Friends';
import NavBar from './components/NavBar';

function App() {
  const [inputClicked , setInputClicked] = React.useState(false);
  function activatePostField(){
      setInputClicked( !inputClicked);
  }
  function closePostField(){
    setInputClicked(false);
  }
  const appStyle = {
    backgroundColor:'black',
    opacity:1

  }
  return (
    <div className="App">
      <NavBar/>
      <div className='main--app--components'>
        <Menu/>
        <Feed inputClicked={inputClicked} activatePostField={activatePostField}/>
        <Friends/>
        
      </div>
      {inputClicked && <div onClick={closePostField}  className='color--overlay'>
      </div>}
    </div>
  );
}

export default App;
