import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import {Firebase,db,storage} from './firebase/config'

ReactDOM.render(
  <FirebaseContext.Provider value={{Firebase,db,storage}}>
    <App />
  </FirebaseContext.Provider>
 ,document.getElementById('root'));
