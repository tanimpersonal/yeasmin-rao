// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjqG0UnNN7JnPF4SScLNqheFZEdqKimEM",
  authDomain: "assignment-10-41ce1.firebaseapp.com",
  projectId: "assignment-10-41ce1",
  storageBucket: "assignment-10-41ce1.appspot.com",
  messagingSenderId: "102317969665",
  appId: "1:102317969665:web:9baf2f80e1e851343f8b00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
