'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route as RouteElement } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <RouteElement path="/" element={<Login />} /> {/* Use RouteElement instead of Route */}
      <RouteElement path="/todo" element={<App />} /> {/* Use RouteElement instead of Route */}
    </Routes>
  </Router>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
