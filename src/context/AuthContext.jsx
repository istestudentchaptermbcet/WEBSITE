import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { authAPI } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Try to get user data from backend
        try {
          const response = await authAPI.getProfile();
          setUser(response.data);
        } catch (backendError) {
          // Fallback to Firebase data if backend fails
          setUser({
            email: currentUser.email,
            name: currentUser.displayName || currentUser.email.split('@')[0],
            role: "Member",
            eventsJoined: 0,
            upcomingEvents: 0,
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      // First authenticate with Firebase
      await signInWithEmailAndPassword(auth, email, password);

      // Then get user data from backend
      try {
        const response = await authAPI.getProfile();
        setUser(response.data);
      } catch (backendError) {
        // Fallback to Firebase data
        setUser({
          email: auth.currentUser.email,
          name: auth.currentUser.displayName || auth.currentUser.email.split('@')[0],
          role: "Member",
          eventsJoined: 0,
          upcomingEvents: 0,
        });
      }

      navigate(`/profile/${email}`);
    } catch (error) {
      alert("Invalid login credentials: " + error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Try to get/create user in backend
      try {
        const response = await authAPI.getProfile();
        setUser(response.data);
      } catch (backendError) {
        // Create user in backend if not exists
        try {
          const backendResponse = await authAPI.register({
            name: result.user.displayName,
            email: result.user.email,
            password: 'google-auth-' + result.user.uid, // Placeholder password
          });
          localStorage.setItem('token', backendResponse.data.token);
          setUser(backendResponse.data.user);
        } catch (registerError) {
          // Fallback to Firebase data
          setUser({
            email: result.user.email,
            name: result.user.displayName,
            role: "Member",
            eventsJoined: 0,
            upcomingEvents: 0,
          });
        }
      }

      navigate(`/profile/${result.user.email}`);
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem('token');
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loginWithGoogle, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
