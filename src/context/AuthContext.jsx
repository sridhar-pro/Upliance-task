import { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "../firebaseConfig"; // ✅ Import properly
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); 
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication
export const useAuth = () => {
  return useContext(AuthContext);
};


