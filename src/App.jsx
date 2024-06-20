import { useState } from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/login/Login'
import SignUp from './page/signup/SignUp'
import Feed from './components/feed/Feed'
import Profile from './components/profile/Profile';
import LoginPage from './page/LoginPage.jsx/LoginPage';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { useSelector } from 'react-redux';
function App() {
  
  
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Feed />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
       
        <Route path="/login" element={<Login />}/>
        <Route path="/signupPage" element={<SignUp />}/>
        <Route path="/loginPage" element={<LoginPage />}/>
     
      </Routes>
      <ToastContainer position="top-right" autoClose={1000}/>
    </BrowserRouter>
   </>
  )
}

export default App
