import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { getRefresh } from "../../redux/TweetSlice";
import {timeSince} from './../../Utils/Constants'

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user.user)

  const likeOrDislikeHandler = async (id) => {
    const token = localStorage.getItem("token");
    console.log("Token from Tweet Like function: ", token);
    if (!token) {
      toast.error("Token not found, please log in.");
      return;
    }

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.post(
        `https://twitterclonebackend-vt4v.onrender.com/api/v1/tweet/like/${id}`,
        {},
        { headers }
      );
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while liking the tweet.");
    }
  };

  const deleteTweetHandler = async (id) => {
    const token = localStorage.getItem("token");
    console.log("Token from Tweet Like function: ", token);
    if (!token) {
      toast.error("Token not found, please log in.");
      return;
    }
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.post(
       `https://twitterclonebackend-vt4v.onrender.com/api/v1/tweet/delete/${id}`,
        {},
        { headers }
      );
     
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className=" flex p-2 border-b-2 border">
          <div>
            <Avatar src="" size="40" round={true} />
          </div>

          <div className=" flex flex-col ml-2 w-full">
            <div className=" flex items-center ">
              <h1 className=" font-bold">{tweet.userId.name}</h1>
              <h1 className=" text-gray-500 text-sm ml-2">
                {`@${tweet.userId.username} ${timeSince(tweet?.createdAt )}`} 
              </h1>
            </div>
            <div>{tweet.description}</div>
            <div className=" flex justify-between px-2 py-2 w-full">
              <div className=" flex items-center gap-1 text-xl hover:text-blue-400 w-">
                {" "}
                <FaRegComment className=" " />{" "}
                <span className=" text-sm">5 </span>
              </div>

              <div
                className=" flex items-center gap-1 text-xl hover:text-blue-400"
                onClick={() => likeOrDislikeHandler(tweet?._id)}
              >
                <CiHeart />
                <span className=" text-sm">{tweet?.like?.length} </span>
              </div>
              <div className=" flex items-center gap-1 text-xl hover:text-blue-400">
                <CiBookmark />
              </div>

              {user?._id === tweet?.userId._id && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                    <MdOutlineDeleteOutline size="24px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
