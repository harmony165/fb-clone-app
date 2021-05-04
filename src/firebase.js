

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAx5lFwPT5Ccs6H3fmD-VMclzz0yC5bvaM",
    authDomain: "shuakki-blog.firebaseapp.com",
    projectId: "shuakki-blog",
    storageBucket: "shuakki-blog.appspot.com",
    messagingSenderId: "496348909283",
    appId: "1:496348909283:web:2ca03dfdec73809016bfd6",
    measurementId: "G-GF57P56JGL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider} ;
  export default db;