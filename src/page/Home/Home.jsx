// Home.jsx
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

  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start max-w-screen-xl mx-auto h-screen">
      <Left />
      <div className="w-full md:w-2/3 lg:w-1/2 ">
        <Outlet />
      </div>
      <Right />
    </div>
  );
};

export default Home;