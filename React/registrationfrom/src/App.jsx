import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import RegistrationForm from "./component/RegistrationForm";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App(){
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  )
}