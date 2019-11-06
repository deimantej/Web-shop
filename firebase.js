import firebase from "firebase/app"
import "firebase/firestore"



  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyBSGq7qnUcYEVtpD2ghPXr0nv3x0ssLZrg",
      authDomain: "bagelshop-4375a.firebaseapp.com",
      databaseURL: "https://bagelshop-4375a.firebaseio.com",
      projectId: "bagelshop-4375a",
      storageBucket: "bagelshop-4375a.appspot.com",
      messagingSenderId: "592675700749",
      appId: "1:592675700749:web:a627cea99517167de85544"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbMenuAdd = db.collection('menuItems');