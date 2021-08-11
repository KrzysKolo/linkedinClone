import React, { useEffect } from 'react';
//COMPONENTS
import { Header, Sidebar, Feed, Login } from './components';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from './features/user/userSlice';
//FIREBASE
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
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <main className="app">
      <Header />
    {!user
      ? (
        <Login />
      )
      : (
        <div className="app__body">
          <Sidebar />
          <Feed />
             {/* WIDGETS*/}
        </div>
      )}
    </main>
  );
}

export default App;
