import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnbp0OdCQBBOkrdW4AXwmOaOIRK5Pmlgg",
  authDomain: "glimpse-ai-ed00b.firebaseapp.com",
  projectId: "glimpse-ai-ed00b",
  storageBucket: "glimpse-ai-ed00b.appspot.com",
  messagingSenderId: "879546342304",
  appId: "1:879546342304:web:a0e1f991911f39436fa2c5",
  measurementId: "G-JD40ZLHB9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();