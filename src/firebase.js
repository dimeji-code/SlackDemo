// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqU7gxluNTvTBaj6IhHjumsVciC-GVXeA",
  authDomain: "slackdemo-fb.firebaseapp.com",
  projectId: "slackdemo-fb",
  storageBucket: "slackdemo-fb.appspot.com",
  messagingSenderId: "416342280115",
  appId: "1:416342280115:web:737e1978eab6d986b2edc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth