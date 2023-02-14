import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const removeclasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    // document.body.classList.remove('bg-primary') 
  }

  const togglemode = (cls, props) => {
    removeclasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setmode('secondary')
      document.body.style.backgroundColor = '#042743'
      showalert(props.mode, "success")
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Amazing Mode";
      // }, 2000);
    } 
    
    //else {
    //   setmode('light')
    //   document.body.style.backgroundColor = 'white';
    //   showalert('Light mode has been enabled', "success")
    //   // document.title = "TextUtils - Light Mode"
    //   // setInterval(() => {
    //   //   document.title = "Install TextUtils Now";
    //   // }, 1500);
    // }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        {/* <Navbar/> */}
        <Alert alert={alert}/>
        <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Try TextUtils - Word Counter And Character Counter" togglemode={togglemode} mode={mode} showalert={showalert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
