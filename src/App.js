import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectuser} from './features/userSlice.js';
import { useSelector } from 'react-redux';



function App() {

  const user = useSelector(selectuser);
  return (
    <div className="app">
      {user ? (
      <>
        <Sidebar />
        <Chat />
      </>
      ) :
      <h2>You need to Login</h2>
      }
      
    </div>
  );
}

export default App;
