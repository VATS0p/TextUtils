// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{ useState } from 'react';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const [bcolor,setbcolor] = useState('primary');
  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },1200)
  }
  const toggleMode =  () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode has been enabled","success ")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enabled","success ")
    }
    }
    const toggleRed =  () =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#910715';
        showAlert("Darkmode has been enabled","success ")
        setbcolor("danger")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Lightmode has been enabled","success ")
        setbcolor("primary")
      }
      }
  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" abouttext="About us" mode={mode} toggleMode={toggleMode} tm={toggleRed} />
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze:" mode={mode} bcolor={bcolor} />} />
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze:" mode={mode} bcolor={bcolor} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
