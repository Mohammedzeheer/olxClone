import React ,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'
import {AuthContext, FirebaseContext} from './store/Context'
import { getAuth,onAuthStateChanged } from 'firebase/auth';



function App() {
    const {setUser} =useContext(AuthContext)
    const {Firebase}=useContext(FirebaseContext)
    const {auth}=getAuth(Firebase)

    useEffect(()=>{
      const auth = getAuth();
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
          //  const uid = user.uid;    
        } else {
          // User is signed out         
        }
      });
    })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
