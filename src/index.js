import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFKmIGHiTEtP-rF2hd_8Kcrlp_zkToeGQ",
  authDomain: "coderhouse-ecommerce-461ed.firebaseapp.com",
  projectId: "coderhouse-ecommerce-461ed",
  storageBucket: "coderhouse-ecommerce-461ed.appspot.com",
  messagingSenderId: "893032781705",
  appId: "1:893032781705:web:eabfd7cacbbc465d527358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
{/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/}

root.render(
    <App />
);