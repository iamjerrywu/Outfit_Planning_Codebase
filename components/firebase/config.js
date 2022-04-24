import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmSJ-PrjnEydmnACVqv2Iahd_BKIohSfk",
  authDomain: "fitcheck-b9b43.firebaseapp.com",
  projectId: "fitcheck-b9b43",
  storageBucket: "fitcheck-b9b43.appspot.com",
  messagingSenderId: "145316936887",
  appId: "1:145316936887:web:7f6112342a2f2a027fe132",
  measurementId: "G-1PW3B12F17"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 
const auth=firebase.auth();
export {firebase,auth};