
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDFM_-aGaFUfGEXCcHBAgYij13GQ9CAH3g",
  authDomain: "linkedin-clone-2cc05.firebaseapp.com",
  projectId: "linkedin-clone-2cc05",
  storageBucket: "linkedin-clone-2cc05.appspot.com",
  messagingSenderId: "190393761518",
  appId: "1:190393761518:web:b9259846eca22adfbd3dff"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();