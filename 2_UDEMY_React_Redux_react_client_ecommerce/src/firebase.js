import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoS7qWwz0Fq2WSqiq0jrvWWu7dQ2-e81k",
  authDomain: "redux-react-ecom.firebaseapp.com",
  projectId: "redux-react-ecom",
  storageBucket: "redux-react-ecom.appspot.com",
  messagingSenderId: "236476406200",
  appId: "1:236476406200:web:29ccaffc9383090987974d",
  measurementId: "G-563Z5Z2EKF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
