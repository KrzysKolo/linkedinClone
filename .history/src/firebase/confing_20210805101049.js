
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_PUBLIC_FIREBASE_PROJECT_ID}.firebase.com`,
  projectId: "linkedin-clone-2cc05",
  storageBucket: "linkedin-clone-2cc05.appspot.com",
  messagingSenderId: "190393761518",
  appId: "1:190393761518:web:b9259846eca22adfbd3dff"
};

function initFirebase () {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
initFirebase();
export { firebase, db, auth };
