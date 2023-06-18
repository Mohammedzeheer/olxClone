import React, { useRef,useState,useContext } from 'react';
import { getAuth,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Firestore, addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';

import Logo from '../../olx-logo.png';
import './Signup.css';
import {FirebaseContext} from '../../store/FirebaseContext';


export default function Signup() {

  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const usernameRef=useRef(null)
  const emailRef=useRef(null)
  const phoneRef=useRef(null)
  const passwordRef=useRef(null)

  const {Firebase,db} = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Firebase);
    
    setEmail(emailRef.current.value)
    setPassword(passwordRef.current.value)
    setPhone(phoneRef.current.value)
    setUsername(usernameRef.current.value)

    const auth = getAuth(Firebase);

    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {

        // Signed up 
       const user = userCredential.user;
       updateProfile(user,{
        displayName:username

       }).then(()=>{

        addDoc(collection(db,"users"),{
          id:userCredential.user.uid,
          email,
          password,
          phone,
          username

        }).then(()=>{
            navigate('/login')
        })
        // ...
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });
    })
    
  };
  
  const loginUser=()=>{
    navigate('/login');
  }
  

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            ref={usernameRef}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            ref={emailRef}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            ref={phoneRef}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            ref={passwordRef}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
       
         <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
}