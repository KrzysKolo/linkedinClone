import React from 'react';
import './App.css';
//COMPONENTS
import { Header, Sidebar, Feed } from './components';

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
