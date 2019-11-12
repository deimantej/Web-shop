import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

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

 const fb = firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
 const dbMenuAdd = db.collection('menuItems');
 const dbOrders = db.collection('orderItems');
 const dbUsers = db.collection('users');

 export {db, dbUsers, dbMenuAdd, dbOrders, fb};
