import React, { Fragment, useContext, useRef, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
import { getStorage, ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router';
import {addDoc,collection,getFirestore} from 'firebase/firestore'


const Create = () => {

  const {Firebase}= useContext(FirebaseContext)
  const{user}=useContext(AuthContext)

  const Navigate=useNavigate()

  const nameRef=useRef()
  const categoryRef=useRef();
  const priceRef=useRef();
  const [image,setImage]=useState(null)

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    const storage = getStorage(Firebase);
    const imageRef = ref(storage, `/images/${image.name}`);
    await uploadBytes(imageRef, image);

        const imageUrl = await getDownloadURL(imageRef);

    const db = getFirestore(Firebase);
    await addDoc(collection(db, 'products'), {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      imageUrl: imageUrl,
      userId: user.uid,
      createdAt: new Date().toDateString()
    });
      Navigate('/')
  };

  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          {/* <form> */}
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              ref={nameRef}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
             ref={categoryRef}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" ref={priceRef} id="fname" name="Price" />
            <br />
          {/* </form> */}
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          {/* <form> */}
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          {/* </form> */}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
