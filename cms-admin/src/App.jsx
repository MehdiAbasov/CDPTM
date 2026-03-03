import React from 'react';
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>

      <Router />
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  )
}

export default App
