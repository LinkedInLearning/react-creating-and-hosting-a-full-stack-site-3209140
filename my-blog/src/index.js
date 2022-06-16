import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYy8z2k4AzOqj8P-RzvNar7ZTf0DAnb_M",
  authDomain: "my-react-blog-7012a.firebaseapp.com",
  projectId: "my-react-blog-7012a",
  storageBucket: "my-react-blog-7012a.appspot.com",
  messagingSenderId: "41179708760",
  appId: "1:41179708760:web:24218970db2adcb514f92d"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
