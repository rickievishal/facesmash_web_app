import firebase from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCXoV45qhjSaIUT91PdTtKngCQAUpRUIMU",
    authDomain: "ratingbackend.firebaseapp.com",
    projectId: "ratingbackend",
    storageBucket: "ratingbackend.appspot.com",
    messagingSenderId: "137839956556",
    appId: "1:137839956556:web:e6b2d295ea993c98fb1ae9"
  };

//we are initializing the firebase app
firebase.initializeApp(firebaseConfig);

//making the database instance 
const db = getFirestore();

//creating a collection reference 
const colref = collection(db,"images");

getDocs(colref)
  .then((snapshot)=>{
    console.log(snapshot)
  })