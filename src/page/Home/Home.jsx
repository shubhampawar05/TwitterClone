import React, { useEffect } from "react";
import Right from "../../components/right/Right";
import Feed from "../../components/feed/Feed";
import Left from "../../components/left.jsx/Left";
import { Outlet, useNavigate } from "react-router-dom";
import useOtherUser from "../../hook/useOtherUser";
import useGetMyTweets from "../../hook/useGetMyTweets";
import { useSelector } from "react-redux";


const Home = () => {


  useOtherUser();
  useGetMyTweets();
  
  const { user } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(()=>{
    if (!user) {
      navigate("/login");
    }
  },[]);
  
  return (
    <>
      <div className=" flex max-w-screen-xl mx-auto ">
        <Left />
        <Outlet/>
        <Right />
      </div>
    </>
  );
};

export default Home;
