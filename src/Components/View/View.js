import React,{useContext,useState,useEffect} from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection, query, where, getDocs } from "firebase/firestore";

function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}= useContext(PostContext)
  const {Firebase}=useContext(FirebaseContext)
  const db=useContext(Firebase)

  useEffect(()=>{

  const Data = async () => {
    if (postDetails?.userId) {
      const { userId } = postDetails;
      const details = query(collection(db, "users"), where("id", "==", userId));
      const snapshot = await getDocs(details);
      snapshot.forEach((doc) => {
        setUserDetails(doc.data());
      });
    }
  };

  Data();
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?postDetails.imageUrl:""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?postDetails.price:""} </p>
          <span>{postDetails?postDetails.name:""}</span>
          <p>{postDetails?postDetails.category:""}</p>
          <span>{postDetails?postDetails.createdAt:""}</span>
        </div>
        {userDetails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
