import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#091856";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextToolkit" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/text-toolkit" element={ <TextForm showAlert={showAlert} heading="Enter the text to ananlyze below" mode={mode} />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" mode={mode} aboutText="About" /> */}

      {/* <TextForm showAlert={showAlert} heading="Enter the text to ananlyze below" mode={mode} /> */}
      {/* <About />                 */}
    </>
  );
}

export default App;
