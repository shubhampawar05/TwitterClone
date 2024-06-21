import React, { useRef, useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh,getIsActive } from "../../redux/TweetSlice";
import { toast } from "react-toastify";
import axios from "axios";

const CreatPost = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(store=>store.tweet.isActive)
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
        `https://twitterclonebackend-vt4v.onrender.com/api/v1/tweet/create`,
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


  const forYouFunc = ()=>{
    dispatch(getIsActive(true))
  }
  const followingFun = ()=>{
    dispatch(getIsActive(false))
  }
  return (
    <div>
      {/* header */}
      <div className=" border-2 flex text-center backdrop-blur-sm w-full ">
        <p onClick={forYouFunc} className={` ${isActive === true ? "border-b-4 border-b-blue-600": null} w-1/2 border p-3 hover:bg-gray-200  hover:font-semibold`} >
          For You
        </p>
        <p onClick={followingFun} className={` ${isActive === false ? "border-b-4 border-b-blue-600": null} w-1/2 border p-3 hover:bg-gray-200  hover:font-semibold`}>
          Following
        </p>
      </div>
      {/* post section */}
      <div>
        <div className="flex p-2 border-2 ">
          <div>
            <Avatar src="#" size="40" round={true} />
          </div>
          <div className=" flex flex-col w-full">
            <input
              type="text"
              placeholder=" What is happning..?"
              onChange={(e) => setDescription(e.target.value)}
              ref={inputRef}
              className=" w-[90%] outline-none border-none p-2 ml-4"
            />
            <div className=" flex justify-between px-8 w-full items-center">
              <div className=" flex  gap-6">
                <CiImageOn className=" text-xl text-blue-600" />{" "}
                <BsEmojiSmile className=" text-xl text-blue-600" />
                <LuCalendarClock className=" text-xl text-blue-600" />
                <CiLocationOn className=" text-xl text-blue-600" />
              </div>
              <button
                className=" px-6 py-2 rounded-full bg-blue-500 text-white text-xl"
                onClick={submitHandler}
              >
                Post{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatPost;
