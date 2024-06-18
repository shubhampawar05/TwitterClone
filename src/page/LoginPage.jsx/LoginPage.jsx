import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const LoginPage = () => {
    let { state } = useLocation();

    const [isLogin, setIsLogin] = useState('');
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log('thisis form loginPage',state.some);
    typeof(state)
    useEffect(()=>{
        setIsLogin(state.some)
    },[])
    const submitHandler= ()=>{
    
    }
  
  return (
    <div>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex items-center justify-evenly w-[80%]">
          <div>
            <img
              className="ml-5"
              width={"300px"}
              src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
              alt="twitter-logo"
            />
          </div>
          <div>
            <div className="my-5">
              <h1 className="font-bold text-6xl">Happening now.</h1>
            </div>
            <h1 className="mt-4 mb-2 text-2xl font-bold">
              {isLogin ? "Login" : "Singup"}
            </h1>
            <form  className="flex flex-col w-[55%]">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
                  />
                </>
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold"
              />
              <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
                {isLogin ? "Login" : "Create Account"}
              </button>
              <h1>
                {isLogin
                  ? "Do not have an account?"
                  : "Already have an account?"}{" "}
                <span
                
                  className="font-bold text-blue-600 cursor-pointer"
                  onClick={()=>setIsLogin(!isLogin)}
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;