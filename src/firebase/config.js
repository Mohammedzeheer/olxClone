import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD-NxdqLNRO34PsC-ifvkT-9fXNSHET2cE",
    authDomain: "fir-158f0.firebaseapp.com",
    projectId: "fir-158f0",
    storageBucket: "fir-158f0.appspot.com",
    messagingSenderId: "455532404515",
    appId: "1:455532404515:web:fe8719a71e714cbb26b696",
    measurementId: "G-JJ3TLJ82EV"
  };


const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase);
const storage = getStorage(Firebase)


export { Firebase,db,storage };


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyD-NxdqLNRO34PsC-ifvkT-9fXNSHET2cE",
//     authDomain: "fir-158f0.firebaseapp.com",
//     projectId: "fir-158f0",
//     storageBucket: "fir-158f0.appspot.com",
//     messagingSenderId: "455532404515",
//     appId: "1:455532404515:web:fe8719a71e714cbb26b696",
//     measurementId: "G-JJ3TLJ82EV"
//   };

// const app = initializeApp(firebaseConfig);
// const firebase = getFirestore(app);
// export default firebase;

///subith api
// const firebaseConfig = {
//   apiKey: "AIzaSyD1V06eUHBO6Se667sditnksZgx1RJq3jI",
//     authDomain: "fir-6aa9c.firebaseapp.com",
//     projectId: "fir-6aa9c",
//     storageBucket: "fir-6aa9c.appspot.com",
//     messagingSenderId: "445965178453",
//     appId: "1:445965178453:web:88c1d2355f2a2e3ed8a6dc",
//     measurementId: "G-GNVGHCDTVJ"
// };
