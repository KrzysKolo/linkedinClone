import React, { useEffect } from 'react';
//COMPONENTS
import { Login, Home, FirstPage, SignUp, MyNetwork, Jobs, Notifications, Messaging } from './pages';
import { Header } from './components';
//ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/user/userSlice';
import { setArticles } from './features/articles/articlesSlice';
import db from './firebase/confing';
//FIREBASE
//MATERIAL UI
//CSS
import './App.css';
import { auth } from './firebase/confing';
//FILES

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("articles").orderBy('date', 'desc').onSnapshot((onSnapshot) => {
      let tempArticles = onSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })
      dispatch(setArticles(tempArticles))
    })
  }, []);

  return (
    <main className="app">
      <Router>
        <Switch>
          <Route path="/messaging" component={Messaging} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/jobs" component={Jobs} />
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
