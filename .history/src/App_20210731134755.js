import React from 'react';
import './App.css';
//COMPONENTS
import { Header, Slider } from './components';

function App() {
  return (
    <main className="App">
      <Header />
     {/* APP BODY */}
     <aside className="app_body">
       <Slider />
     </aside>
      {/* SLIDER */}
      {/* FEED */}
      {/* WIDGETS*/}
    </main>
  );
}

export default App;
