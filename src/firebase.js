import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyC3hO_6wOUJ1BMrfuh9doSKG0FZ7NCFBZA',
    authDomain: 'gym-nation-development.firebaseapp.com',
    databaseURL: 'https://gym-nation-development-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'gym-nation-development',
    storageBucket: 'gym-nation-development.appspot.com',
    messagingSenderId: '103058357205',
    appId: '1:103058357205:web:03480d4702bc9a3fa61b5c'
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;