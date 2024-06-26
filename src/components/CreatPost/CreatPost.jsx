import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh, getIsActive } from "../../redux/TweetSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { Base_Url } from "./../../Utils/Constants";

const CreatPost = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((store) => store.tweet.isActive);
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);

  const submitHandler = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Token not found, please log in.");
      return;
    }

    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.post(
        `${Base_Url}/api/v1/tweet/create`,
        { description },
        { headers }
      );
      console.log("createPost response", res);
      if (res.data.success) {
        dispatch(getRefresh());
        toast.dismiss();
        toast.success(res.data.message);
        setDescription(""); // Reset the description state
        inputRef.current.value = ""; // Reset the input field value
      } else {
        toast.dismiss();
        toast.error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error creating post", error);
      toast.dismiss();
      toast.error("An error occurred while creating the post.");
    }
  };

  const forYouFunc = () => {
    dispatch(getIsActive(true));
  };
  const followingFun = () => {
    dispatch(getIsActive(false));
  };

  return (
    <div>
      {/* header */}
      <div className="border-2 flex text-center backdrop-blur-sm w-full">
        <p
          onClick={forYouFunc}
          className={`w-1/2 border p-3 hover:bg-gray-200 hover:font-semibold ${
            isActive === true
              ? "border-b-4 border-b-blue-600 font-semibold"
              : "font-normal"
          }`}
        >
          For You
        </p>
        <p
          onClick={followingFun}
          className={`w-1/2 border p-3 hover:bg-gray-200 hover:font-semibold ${
            isActive === false
              ? "border-b-4 border-b-blue-600 font-semibold"
              : "font-normal"
          }`}
        >
          Following
        </p>
      </div>
      {/* post section */}
      <div className="p-4 border-2">
        <div className="flex items-start gap-4">
          <Avatar src="#" size="40" round={true} />
          <div className="flex-1">
            <input
              type="text"
              placeholder="What's happening?"
              onChange={(e) => setDescription(e.target.value)}
              ref={inputRef}
              className="w-full outline-none border-none p-2 rounded-full bg-gray-100"
            />
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-4">
                <CiImageOn className="text-xl text-blue-600" />
                <BsEmojiSmile className="text-xl text-blue-600" />
                <LuCalendarClock className="text-xl text-blue-600" />
                <CiLocationOn className="text-xl text-blue-600" />
              </div>
              <button
                className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm"
                onClick={submitHandler}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatPost;