import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAgeQp2DfB5sYpIu0pbHXXrIiFjR1BLmL4",
  authDomain: "gamecase-coderhouse.firebaseapp.com",
  projectId: "gamecase-coderhouse",
  storageBucket: "gamecase-coderhouse.appspot.com",
  messagingSenderId: "447856035882",
  appId: "1:447856035882:web:c0aa2c86332c469067db53"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)