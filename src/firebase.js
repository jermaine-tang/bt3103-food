import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCYLntaJN_WRXcFJxPg87JwSU0vlBVxd58",
    authDomain: "bt3103-week-6-53caf.firebaseapp.com",
    projectId: "bt3103-week-6-53caf",
    storageBucket: "bt3103-week-6-53caf.appspot.com",
    messagingSenderId: "964104958478",
    appId: "1:964104958478:web:a5acffbb3b93cc4aedc25f",
    measurementId: "G-B4PTTRQWS5"
  };

    firebase.initializeApp(firebaseConfig);
    var database = firebase.firestore();
    export default database;
