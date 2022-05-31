import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
// const functions = require('firebase-functions');

// exports.helloWorld = functions.https.onRequest((request, response) => {
//      response.send("Hello from Firebase!");
// });