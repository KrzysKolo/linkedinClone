import React from 'react';

//COMPONENTS
import { Header, Sidebar, Feed } from './components';
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import './App.css';
//FILES

function App() {
  return (
    <main className="app">
      <Header />
     {/* APP BODY */}
     <div className="app__body">
       <Sidebar />
       <Feed />
     </div>


      {/* WIDGETS*/}
    </main>
  );
}

export default App;
