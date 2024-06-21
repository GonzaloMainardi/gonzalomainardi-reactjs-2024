import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAluC1RcGU01ZBXO1TH_XipJW-1U-ivbx4",
  authDomain: "react-js-gonzamainardi.firebaseapp.com",
  projectId: "react-js-gonzamainardi",
  storageBucket: "react-js-gonzamainardi.appspot.com",
  messagingSenderId: "974552933506",
  appId: "1:974552933506:web:ce5dac5f8beeb426f8809b",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
