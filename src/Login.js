import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

const Login = ({ user, setUser }) => {
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser((prev) => ({ ...prev, user: result.user }));
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={"[SLACK_LOGO_HERE]"} alt="logo" />
      </div>
      <h1>Sign in</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        vitae!
      </p>
      <Button onClick={signIn}>Sign in with Google</Button>
    </div>
  );
};

export default Login;
