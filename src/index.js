import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import firebase from "firebase";

//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_TO,
// appId:process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// });
// firebase.firestore().collection('users').doc('yo').set({name:"HELLLOO"});
// console.log("ITS DONE HERE!");
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCl15mvuayHnJt7XAt4o5SlrmyjZN4fS0g",
    authDomain: "dossier-8ca16.firebaseapp.com",
    projectId: "dossier-8ca16",
    storageBucket: "dossier-8ca16.appspot.com",
    messagingSenderId: "525843140571",
    appId: "1:525843140571:web:82d7ea61692d637c6961fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().collection('users').doc('yo').set({name:"HELLLOO"});
  //console.log("ITS DONE HERE!");
// </script>
ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
    <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
