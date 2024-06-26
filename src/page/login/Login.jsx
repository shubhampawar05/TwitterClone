import React from "react";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto h-screen flex flex-col md:flex-row justify-center items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2  text-white flex justify-center items-center h-full">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-3/4 md:w-2/3 lg:w-1/2 text-white"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-full px-8 md:px-0">
          <h1 className="text-black text-6xl md:text-7xl font-extrabold mb-4">
            Happening now
          </h1>
          <h4 className="text-4xl md:text-5xl font-bold mb-8">Join today.</h4>
          <div className="w-full max-w-md space-y-4 mb-8">
            <button className="w-full px-4 py-3 bg-black rounded-full text-white hover:bg-gray-800 transition-colors">
              Sign Up With Google
            </button>
            <button className="w-full px-4 py-3 bg-black rounded-full text-white hover:bg-gray-800 transition-colors">
              Sign Up With Github
            </button>
          </div>
          <hr className="w-full mb-8" />
          <div className="w-full max-w-md space-y-4">
            <Link to="/loginPage" state={{ some: false }}>
              <button className="w-full px-4 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors">
                Create Account
              </button>
            </Link>
            <p className="text-xs">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            <h2 className="text-lg">Already have an account?</h2>
            <Link to="/loginPage" state={{ some: true }}>
              <button className="w-full px-4 py-3 bg-black rounded-full text-blue-500 hover:text-blue-600 transition-colors">
                Sign-in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;