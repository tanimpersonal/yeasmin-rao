import React, { useRef } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Utility/firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const email = useRef();

  const password = useRef();
  const [loggedUser, loggedLoading, loggedError] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLoginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email.current.value, password.current.value);
  };

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    console.log(googleUser);
  };
  if (loggedUser || googleUser) {
    navigate(from, { replace: true });
  }
  if (loggedLoading || googleLoading) {
    const loading = <p>Loading....</p>;
  }
  return (
    <div>
      {loading}
      <form onSubmit={handleLoginUser}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="google-signin">
        <button onClick={() => handleGoogleSignIn()}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
