import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "firstsample-1c767.appspot.com",
  messagingSenderId: "885351904836",
  appId: "1:885351904836:web:d97c71a2c18feddf0aae11",
  measurementId: "G-0PM7JKTN0P"
}

// Initialize Firebase
if (!firebase.apps.length) {
  const Firebase = firebase.initializeApp(FirebaseCredentials);
} else {
  const Firebase = firebase.app()
}
const auth = firebase.auth();

export {auth}