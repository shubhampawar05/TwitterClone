import React from "react";
import Right from "../../components/right/Right";
import Feed from "../../components/feed/Feed";
import Left from "../../components/left.jsx/Left";
import { Outlet } from "react-router-dom";
import useOtherUser from "../../hook/useOtherUser";
import useGetMyTweets from "../../hook/useGetMyTweets";


const Home = () => {
  useOtherUser();
  useGetMyTweets();
  return (
    <>
      <div className=" flex  w-[80%] mx-auto border border-black ">
        <Left />
        <Outlet/>
        <Right />
      </div>
    </>
  );
};

export default Home;
