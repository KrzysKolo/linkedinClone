import React, { useEffect } from 'react';
//COMPONENTS
import { Header, Sidebar, Feed, Login } from './components';
//REDUX
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
//FIREBASE
//MATERIAL UI
//CSS
import './App.css';
import { auth } from './firebase/confing';
//FILES

function App() {
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged();
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
