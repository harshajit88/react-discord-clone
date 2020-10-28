import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectuser} from './features/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import {login, logout} from './features/userSlice'



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is ', authUser);
      if (authUser) {
        dispatch(login({
          uid : authUser.uid,
          photo : authUser.photoURL,
          email : authUser.email,
          displayName : authUser.displayName
        }))

      }else {
        dispatch(logout());

      }

    })

  }, [dispatch]);
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
