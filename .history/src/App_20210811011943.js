import React, { useEffect } from 'react';
//COMPONENTS
import { Login, Home, FirstPage, SignUp, MyNetwork } from './pages';
import { Header } from './components';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/user/userSlice';
//FIREBASE
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//MATERIAL UI
//CSS
import './App.css';
import { auth } from './firebase/confing';
//FILES

function App() {
  return (
    <main className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/mynetwork" component={MyNetwork} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" component={FirstPage} />
        </Switch>
      </Router>

    </main>
  );
}

export default App;
