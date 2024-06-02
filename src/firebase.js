import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBhkqRFiDMPTednH0HYrhaWEK769a4dqXE",
    authDomain: "infoproject-c6e63.firebaseapp.com",
    databaseURL: "https://infoproject-c6e63-default-rtdb.firebaseio.com",
    projectId: "infoproject-c6e63",
    storageBucket: "infoproject-c6e63.appspot.com",
    messagingSenderId: "426287835863",
    appId: "1:426287835863:web:56e9a79a24a8d162321e92"
  };

  export const db = getDatabase(initializeApp(firebaseConfig));