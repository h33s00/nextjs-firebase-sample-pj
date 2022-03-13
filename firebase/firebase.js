import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACovZ-iqvAeqCVSG6wzCFzvXEVCH8KMgQ",
  authDomain: "firstsample-1c767.firebaseapp.com",
  projectId: "firstsample-1c767",
  storageBucket: "firstsample-1c767.appspot.com",
  messagingSenderId: "885351904836",
  appId: "1:885351904836:web:d97c71a2c18feddf0aae11",
  measurementId: "G-0PM7JKTN0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// 회원가입
// export const signupEmail = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// 로그인
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};