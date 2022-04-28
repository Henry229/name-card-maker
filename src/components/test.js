import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};


// auth

import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;

//signin
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;

//signup
import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;

onAuthChange(onUserChanged) {
  return firebaseAuth.onAuthStateChanged(user => {
     onUserChanged(user);
   });
 }

 useEffect(() => {
  const off = authService.onAuthChange(user => {
    user && goToMaker(user.id);
  })
  return () => {
    off();
  };
});

const first = (para) => {
  console.log(1);
  
}