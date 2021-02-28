import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAHiq6pmEusCR9tzwY8kbsOZm5rWumRmrk",
  authDomain: "barter-system-cb1b0.firebaseapp.com",
  projectId: "barter-system-cb1b0",
  storageBucket: "barter-system-cb1b0.appspot.com",
  messagingSenderId: "970015830480",
  appId: "1:970015830480:web:fca0865b82bd59c84189d5"
};
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
