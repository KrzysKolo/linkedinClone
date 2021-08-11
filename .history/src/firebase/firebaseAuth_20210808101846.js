import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseAuthConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requiredDisplayName: false,
    }
  ]
}