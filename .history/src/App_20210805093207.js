import React, { useEffect } from 'react';
//COMPONENTS
import { Login } from './components';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/user/userSlice';
//FIREBASE
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//MATERIAL UI
//CSS
import './App.css';
import { auth } from './firebase/confing';
//FILES

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,

        }));
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <main className="app">

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>

    </main>
  );
}

export default App;
