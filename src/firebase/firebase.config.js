// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJAcW6hsMGd2PSSkqHpUScQ9cnmfzO-w",
  authDomain: "tasete-master.firebaseapp.com",
  projectId: "tasete-master",
  storageBucket: "tasete-master.appspot.com",
  messagingSenderId: "214375182146",
  appId: "1:214375182146:web:759660db76cc5b2e9ce2db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;