import React, { useRef } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../Utility/firebase.init";
import google from "../../images/google.png";
import "./Login.css";
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
    console.log(error);
  };
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
    console.log(googleUser);
  };
  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);
  const handlePasswordReset = () => {
    sendPasswordResetEmail(email.current.value);
    if (!passwordResetError) {
      toast("Reset Password Sent!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  if (loggedUser || googleUser) {
    navigate(from, { replace: true });
  }
  if (loggedLoading || googleLoading) {
    const loading = <p>Loading....</p>;
  }

  return (
    <div className="login-container container container-fluid">
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
          <span onClick={handlePasswordReset} className="mx-5 pass-reset">
            Forgot password?
          </span>
        </div>
        {error ? <div className="error text-danger">{error.message}</div> : ""}
        {passwordResetError ? (
          <div className="error text-danger">{passwordResetError.message}</div>
        ) : (
          ""
        )}
        <div className="button d-flex gap-5 align-items-center">
          <div className="submit">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <div className="google-signin">
            <button
              className="btn-dark rounded"
              onClick={() => handleGoogleSignIn()}
            >
              Sign In With Google{" "}
              <span>
                <img width={30} src={google} alt="" />
              </span>
            </button>
          </div>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
