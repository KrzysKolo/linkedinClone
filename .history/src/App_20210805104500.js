import React, { useEffect } from 'react';
//COMPONENTS
import { Login } from './components';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/user/userSlice';
//FIREBASE
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { getRrfProps } from './firebase/firebase-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//MATERIAL UI
//CSS
import './App.css';
import { auth } from './firebase/confing';
//FILES

function App() {
  return (
    <main className="app">
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>

    </main>
  );
}

export default App;
