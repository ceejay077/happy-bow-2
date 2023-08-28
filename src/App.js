/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import VetFind from "./pages/findVet.jsx";
import MissingDog from "./pages/missingDog.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/find-vet' element={<VetFind />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/report-missing-dog' element={<MissingDog />} />
          <Route path='/product' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
