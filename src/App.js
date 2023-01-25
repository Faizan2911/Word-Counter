import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light'); // light mode enable or not.
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      mes: message,
      type: type
    })

    setTimeout(() => {
      setAlert(" ");
    }, 3000);

  }


  // toogle use for button of dark or light mode

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("this is dark mode", "Success!");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("this is light mode", "Success!");
    }
  }





  return (
    <>
      <Router>

        {/* <Navbar title="TextUtilites*" aboutText="About"  mode={mode} /> */}
        {/* <Navbar />  */}


        <Navbar title="Word Counter" aboutText="About" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>

            <Route exact path="about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Type OR Paste Your Text" mode={mode} />} />

            {/* <About /> */}
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
