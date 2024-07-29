import Login from "./components/Login";
import Signup from "./components/Signup";
import { authContext } from "./AuthContext";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const navigate = useNavigate();
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const uerresp = data.user;

        if (uerresp.emailVerified == false) {
          alert("Hey please verify your email");
          signOut(auth).then(() => console.log(auth.currentUser));
        } else {
          alert("Login success");
          navigate("/home");
        }
      })
      .catch((err) => alert(err.message));
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((d) => {
        return sendEmailVerification(d.user);
      })
      .then(() =>
        alert(
          "Your account created!. Please verify it by the email sent to you"
        )
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <authContext.Provider value={{ login, signup }}>
        <h1>Auth</h1>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </authContext.Provider>
    </div>
  );
}

export default App;
