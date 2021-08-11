import React from 'react';
import './App.css';
//COMPONENTS
import { Header, Sidebar, Feed } from './components';

function App() {
  return (
    <main className="app">
      <Header />
     {/* APP BODY */}
     <aside className="app_body">
       <Sidebar />
     </aside>
      <Feed />

      {/* WIDGETS*/}
    </main>
  );
}

export default App;
