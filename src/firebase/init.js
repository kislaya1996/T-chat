import firebase from 'firebase/app';
  import firestore from 'firebase/firestore';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPAs8uIj1366Y9q0WdTBAYy6L31xYyfcI",
    authDomain: "t-chat-362e5.firebaseapp.com",
    databaseURL: "https://t-chat-362e5.firebaseio.com",
    projectId: "t-chat-362e5",
    storageBucket: "t-chat-362e5.appspot.com",
    messagingSenderId: "917521213093",
    appId: "1:917521213093:web:dcd486ff19ede153588f4c",
    measurementId: "G-BZ6X4TT03C"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });
  export default firebaseApp.firestore();