import React from "react";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-full bg-white min-h-screen">
      <div className=" max-w-screen-xl mx-auto h-screen">
        <div className=" flex h-full w-full  ">
          <div className=" w-1/2 text-white flex justify-center items-center h-full   ">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr "
              className=" text-white  w-96 "
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z  "></path>
              </g>
            </svg>
          </div>
          <div className="w-1/2 flex flex-col justify-center h-full">
            <h1 className=" text-black text-[80px] font-extrabold  ">
              Happening now
            </h1>
            <h4 className=" text-5xl font-bold">Join today.</h4>
            <div className=" py-4 flex  flex-col gap-4">
              <button className=" max-w-md px-4 py-2 bg-black rounded-full text-white">
                {" "}
                Sign Up With Google{" "}
              </button>
              <button className=" max-w-md px-4 py-2 bg-black rounded-full text-white">
                {" "}
                Sign Up With Github{" "}
              </button>
            </div>
            <hr />
            <div className="py-4 flex  flex-col gap-4">
            <Link to={'/loginPage '}  state={{ some: false }}>
            <button className=" max-w-md px-4 py-2 bg-blue-500 rounded-full text-white">
              Create Account{" "}
            </button>
            </Link>
            <p className=" text-[12px]">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
            </div>
            <div className="py-4 flex  flex-col gap-4">
              <h1>Already have an account?</h1>
             <Link to="/loginPage"  state={{ some: true }} >
             <button className=" max-w-md px-4 py-2 bg-black rounded-full text-blue-500">
                Sign-in{" "}
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
