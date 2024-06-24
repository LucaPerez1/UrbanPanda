import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCUPG8TddfK215C6j5PeRphwLOlS53-Zbw",
    authDomain: "proyecto-react-12006.firebaseapp.com",
    projectId: "proyecto-react-12006",
    storageBucket: "proyecto-react-12006.appspot.com",
    messagingSenderId: "656361017505",
    appId: "1:656361017505:web:3e4a85acd08cdf918ee0e0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
