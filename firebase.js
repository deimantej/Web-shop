import firebase from "firebase/app"
import "firebase/firestore"



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB2vmf0sgMYCyeaaFtEpYi1ZodnvSyMw4U",
    authDomain: "peak-eon-535.firebaseapp.com",
    databaseURL: "https://peak-eon-535.firebaseio.com",
    projectId: "peak-eon-535",
    storageBucket: "peak-eon-535.appspot.com",
    messagingSenderId: "1094237355187",
    appId: "1:1094237355187:web:6da48a1a9d0bdc8e4ac4c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbMenuAdd = db.collection('menuItems');