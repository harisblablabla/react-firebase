import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5ipICQFTEin-PmqaqnTDLqV-L3QsNWE4",
    authDomain: "fir-1-154a4.firebaseapp.com",
    databaseURL: "https://fir-1-154a4.firebaseio.com",
    projectId: "fir-1-154a4",
    storageBucket: "fir-1-154a4.appspot.com",
    messagingSenderId: "157930682557",
    appId: "1:157930682557:web:a3ed4244ffff3778aedfd4",
    measurementId: "G-WLX9CZ7ZVX"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;

//   rules_version = '2';;
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }