import React, { useRef } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import auth from "../Utility/firebase.init";
import "./Register.css";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const email = useRef("");
  const password = useRef("");
  const emailToast = () => {};
  const handleCreateUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email.current.value, password.current.value);
    toast("Email Verification Sent!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  console.log(user);
  return (
    <div className="register container container-fluid">
      <form onSubmit={handleCreateUser}>
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
        <div className="mb-3">
          <label className="form-check-label" htmlFor="exampleCheck1">
            Already a user?{" "}
            <span className="signin" onClick={handleToLogin}>
              Login
            </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default Register;
