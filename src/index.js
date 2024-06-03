'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route as RouteElement } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Login from './Login';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBhkqRFiDMPTednH0HYrhaWEK769a4dqXE",
    authDomain: "infoproject-c6e63.firebaseapp.com",
    databaseURL: "https://infoproject-c6e63-default-rtdb.firebaseio.com",
    projectId: "infoproject-c6e63",
    storageBucket: "infoproject-c6e63.appspot.com",
    messagingSenderId: "426287835863",
    appId: "1:426287835863:web:56e9a79a24a8d162321e92"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

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
