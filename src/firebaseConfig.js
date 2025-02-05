import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNNPG9scBIGadz39ZsJs4BABqH4hO4F4I",
  authDomain: "upliance-task.firebaseapp.com",
  projectId: "upliance-task",
  storageBucket: "upliance-task.firebasestorage.app",
  messagingSenderId: "814508875594",
  appId: "1:814508875594:web:1bbeefbe73ade6d8f8ebb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign-in function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in: ", error);
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

export { auth, signInWithGoogle, logout };
