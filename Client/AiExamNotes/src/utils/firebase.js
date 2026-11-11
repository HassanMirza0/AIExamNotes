// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import .meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiexamnotes-a7390.firebaseapp.com",
  projectId: "aiexamnotes-a7390",
  storageBucket: "aiexamnotes-a7390.firebasestorage.app",
  messagingSenderId: "55848397028",
  appId: "1:55848397028:web:64234ed561f047453ea4f1",
  measurementId: "G-SWMLQG7NT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}