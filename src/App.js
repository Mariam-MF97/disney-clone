import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
