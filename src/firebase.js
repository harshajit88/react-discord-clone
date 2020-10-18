import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAiZ6n3KKAeb-Y4i04dPINIOAoR4r7vGFY",
    authDomain: "discord-clone-40441.firebaseapp.com",
    databaseURL: "https://discord-clone-40441.firebaseio.com",
    projectId: "discord-clone-40441",
    storageBucket: "discord-clone-40441.appspot.com",
    messagingSenderId: "970049679498",
    appId: "1:970049679498:web:7981aa145879f3c53e3d73",
    measurementId: "G-90Y2CQ9DXN"
  };
//initialize firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//get database
  const db = firebaseApp.firestore();
//get authentication
  const auth = firebaseApp.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;