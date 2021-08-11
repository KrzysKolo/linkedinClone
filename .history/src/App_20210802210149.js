import React from 'react';
//COMPONENTS
import { Header, Sidebar, Feed } from './components';
//REDUX
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';
//FIREBASE
//MATERIAL UI
//CSS
import './App.css';
//FILES

function App() {
  const user = useSelector(selectUser);

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
        </div>

      )}



      {/* WIDGETS*/}
    </main>
  );
}

export default App;
