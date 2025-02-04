import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@mui/material";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log("User:", result.user);
    });
  };

  return <Button variant="contained" onClick={signIn}>Sign in with Google</Button>;
};

export default Login;
