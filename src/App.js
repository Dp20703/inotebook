import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Alert from './components/Alert';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  //For Dark and Light Mode:
  const [mode, setMode] = useState("light");

  // For Dark and Light Mode:
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // showAlert("Dark Mode has been Enabled", 'success');
      // document.title = 'NewsMonkey - Dark Mode';

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light Mode has been Enabled", 'success')
      // document.title = 'NewsMonkey - Light Mode';

    }
  };

  //For Alert in Alert.js File
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setInterval(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert} mode={mode} toggleStyle={toggleMode} title="iNotebook" />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} mode={mode} />}></Route>
              <Route exact path="/about" element={<About mode={mode} />}></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} mode={mode} />}></Route>
              <Route exact path="/signup" element={<Signup showAlert={showAlert} mode={mode} />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
