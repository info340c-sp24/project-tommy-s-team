'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Login from './Login';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged  } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const root = createRoot(document.getElementById('root'));
onAuthStateChanged(auth, (firebaseUser) => {
  if(firebaseUser){
      console.log('logged in', firebaseUser.uid);
      root.render(
        <Router>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Use Route instead of RouteElement */}
            <Route path="/todo" element={<App uid = {firebaseUser.uid}/>} /> {/* Use Route instead of RouteElement */}
          </Routes>
        </Router>
      );
  }
  else {
      console.log('logged out');
  }
});
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Login />} /> {/* Use Route instead of RouteElement */}
//       <Route path="/todo" element={<App uid = {uid}/>} /> {/* Use Route instead of RouteElement */}
//     </Routes>
//   </Router>
// );
