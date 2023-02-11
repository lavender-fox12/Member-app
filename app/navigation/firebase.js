// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAykkCbsVHJi2aFuGrUFYepEk0gR_mrZCQ",
  authDomain: "member-app-8683b.firebaseapp.com",
  projectId: "member-app-8683b",
  storageBucket: "member-app-8683b.appspot.com",
  messagingSenderId: "296333616431",
  appId: "1:296333616431:web:bafb79c1ac5238bc80edda",
  measurementId: "G-J10V2VZ3DD"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();
// const analytics = getAnalytics(app);

export { auth };