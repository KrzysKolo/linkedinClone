import { firebaseApp } from './../firebase/confing';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requiredDisplayName: false,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    }
  ],
  signInSuccessUrl: "/home"
}

const FirebaseAuth = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth />
    </div>
  )
}