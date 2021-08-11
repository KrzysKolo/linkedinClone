import React from 'react';
import './App.css';
//COMPONENTS
import { Header, Sidebar } from './components';

function App() {
  return (
    <main className="App">
      <Header />
     {/* APP BODY */}
     <aside className="app_body">
       <Sidebar />
     </aside>
      {/* SLIDER */}
      {/* FEED */}
      {/* WIDGETS*/}
    </main>
  );
}

export default App;
