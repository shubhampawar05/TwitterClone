import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import useGetProfile from "../../hook/useGetProfile";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { followingUpdate } from "../../redux/UserSlice";
import { getRefresh } from "../../redux/TweetSlice";
import axios from "axios";
import {Base_Url}from './../../Utils/Constants'

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useGetProfile(id);
  const { profile, user } = useSelector((state) => state.user); // Accessing profile correctly

  const followAndUnfollowHandler = async () => {
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

      let res;
      if (user?.following?.includes(id)) {
        // Unfollow
        res = await axios.get(
          `${Base_Url}/api/v1/user/UnFollow/${id}`,
          { headers }
        );
      } else {
        // Follow
        res = await axios.get(
          `${Base_Url}/api/v1/user/follow/${id}`,
          { headers }
        );
      }

      console.log(res);
      dispatch(followingUpdate(id));
      dispatch(getRefresh());
      toast.dismiss();
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  if (!profile) {
    return <div className=" px-4 border-l border-r border-[gray-500]">Loading...</div>; 
  }

  return (
    <div className="w-[60%] ml-[25%] px-4 border-l border-r border-[gray-500]">
      <div>
        <div className=" flex items-center py-2  ">
          <Link to="/">
            <div className=" p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoMdArrowBack className=" text-xl" />
            </div>
          </Link>
          <div className="ml-2">
            <h1 className=" font-bold text-lg">{profile.name} </h1>
            <p className=" text-gray-500 text-sm">10 post </p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfEVWVqmdR82XU2f9eUuDJ_NMbmamzi0TZQ&s"
          alt=""
          className=" w-full h-56 "
        />
        <div className=" relative flex items-center justify-between w-full">
          <span>
            <Avatar
              twitterHandle="sitebase"
              size="100"
              round={true}
              className=" absolute -bottom-1 left-2 "
            />
          </span>
          {profile?._id === user?._id ? (
            <span className=" p-2 border border-black rounded-full mt-2 cursor-pointer">
              Edit Profile
            </span>
          ) : (
            <span
              onClick={followAndUnfollowHandler}
              className=" p-2 border border-black bg-black text-white rounded-full mt-2"
            >
              {user?.following.includes(id) === true ? "Following" : "Follow"}
            </span>
          )}
        </div>
        <div className=" p-4">
          <h1 className=" font-bold text-xl">{profile.name} </h1>
          <h1 className=" text-gray-500 text-sm">{`@${profile?.username}`}</h1>
        </div>
        <p className=" px-4 text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          necessitatibus delectus deserunt neque commodi. Vero inventore
          consectetur veritatis perferendis itaque, ducimus, odit debitis ut
          error molestiae, iusto nemo ratione aperiam?
        </p>
      </div>
    </div>
  );
};

export default Profile;
