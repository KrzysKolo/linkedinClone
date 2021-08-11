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
       <Feed />
     </aside>


      {/* WIDGETS*/}
    </main>
  );
}

export default App;
