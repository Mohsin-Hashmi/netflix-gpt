import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignupForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/PK-en-20250210-TRIFECTA-perspective_2ad65b09-fa88-4c24-969d-b8df29753007_small.jpg"
          alt="bg netflix"
        />
      </div>
      <div className="relative h-screen">
        <form
          action=""
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black/80 w-[450px] py-[48px] px-[68px] "
        >
          <h1 className="text-white text-3xl font-bold mb-[28px] ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className=" w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className=" w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 bg-gray-600 text-white rounded-sm"
          />
          <button className=" bg-[#E50914] w-full text-white p-4 rounded-md  text-xl ">
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
                to="#"
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
                to="#"
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
