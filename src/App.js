import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Constance Newman"
        avatar="https://randomuser.me/api/portraits/women/51.jpg"
        statusOnline
        statusText="online"
      />
      <Contact 
        name="Connor Lane"
        avatar="https://randomuser.me/api/portraits/men/79.jpg"
        statusText="offline"
      />
      <Contact 
        name="Mildred Hamilton"
        avatar="https://randomuser.me/api/portraits/women/14.jpg"
        statusOnline
        statusText="online"
      />
    </div>
  );
}

export default App;
