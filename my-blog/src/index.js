import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCWtbIqWpDuYbDXTJXykl5mks55llevDLk",
  authDomain: "my-react-blog-39b72.firebaseapp.com",
  projectId: "my-react-blog-39b72",
  storageBucket: "my-react-blog-39b72.appspot.com",
  messagingSenderId: "1065107970961",
  appId: "1:1065107970961:web:72cec4f1488124174d1830",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
