import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKxXWD29N07hiAZN-nwyCuZhO82sNyNUU",
    authDomain: "gym-nation-d12f8.firebaseapp.com",
    projectId: "gym-nation-d12f8",
    storageBucket: "gym-nation-d12f8.appspot.com",
    messagingSenderId: "705666843634",
    appId: "1:705666843634:web:840f8d3924b8865643216b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export default firebase;