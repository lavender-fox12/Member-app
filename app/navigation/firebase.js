// Import the functions you need from the SDKs you need
import {initializeApp, getApps, getApp} from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAykkCbsVHJi2aFuGrUFYepEk0gR_mrZCQ",
  authDomain: "member-app-8683b.firebaseapp.com",
  databaseURL: "https://member-app-8683b-default-rtdb.firebaseio.com",
  projectId: "member-app-8683b",
  storageBucket: "member-app-8683b.appspot.com",
  messagingSenderId: "296333616431",
  appId: "1:296333616431:web:bafb79c1ac5238bc80edda",
  measurementId: "G-J10V2VZ3DD"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // To make sure we don't initalize twice https://stackoverflow.com/a/73176837

const auth = getAuth(app);
const db = getDatabase();
export { auth, db };
