import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG_IMAGE } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    /**Validate the form data */
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      /**Sign up logic */
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      /**Sign in logic */
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG_IMAGE}
          alt="bg netflix"
        />
      </div>
      <div className="relative h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black/80 w-[450px] py-[48px] px-[68px] "
        >
          <h1 className="text-white text-3xl font-bold mb-[28px] ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className=" w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className=" w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
          />
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className=" bg-[#E50914] w-full text-white p-4 rounded-md  text-xl "
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-white my-[16px]"> OR</p>
          <div className="flex justify-between hover:underline">
            <div className="flex gap-x-[10px] items-center">
              <input type="checkbox" className="text-white bg-white" />
              <p className="text-white">Remember Me</p>
            </div>
            <Link className="text-white">Forgot password?</Link>
          </div>
          {isSignInForm ? (
            <p className="text-[#ffffffb3] mt-[16px] text-base">
              New to Netflix?{" "}
              <Link
                onClick={toggleSignupForm}
                to="/"
                className="text-white hover:underline"
              >
                Sign up now.
              </Link>
            </p>
          ) : (
            <p className="text-[#ffffffb3] mt-[16px] text-base">
              Already have an account?{" "}
              <Link
                onClick={toggleSignupForm}
                to="/"
                className="text-white hover:underline"
              >
                Sign in now.
              </Link>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
