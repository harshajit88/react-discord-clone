import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectuser} from './features/userSlice.js';
import { useSelector } from 'react-redux';
import Login from './Login';



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
      <Login />
      }
      
    </div>
  );
}

export default App;
