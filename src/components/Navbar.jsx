import React from "react";
import "../App.css";
import logo from "../images/trachat.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="Navbar">
      <div className="NavbarLogoAndHeading">
        <img src={logo} className="NavbarLogo" alt="Trachat logo" />
        <h1 className="NavbarHeading">Trachat</h1>
      </div>
      {user ? (
        <button onClick={signOut} className="SignOutButton" type="button">
          Sign out
        </button>
      ) : (
        <button className="SignInButton" type="button">
          <GoogleButton onClick={signInWithGoogle} />
        </button>
      )}
    </div>
  );
};

export default Navbar;
