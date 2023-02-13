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

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert('Dark mode has been enabled', "success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Amazing Mode";
      // }, 2000);
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert('Light mode has been enabled', "success")
      document.title = "TextUtils - Light Mode"
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showalert={showalert} heading="Enter The text to analyze below:" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
};

export default App;
