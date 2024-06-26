// Left.jsx
import React from "react";
import { IoMdHome, IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUser, getUser, getUserProfile } from "../../redux/UserSlice";
import { getAllTweets } from "../../redux/TweetSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { Base_Url } from "./../../Utils/Constants";

const Left = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${Base_Url}/api/v1/user/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUser(null));
      dispatch(getUserProfile(null));
      dispatch(getAllTweets(null));
      localStorage.clear("token");
      navigate("/login");
      toast.dismiss();
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full md:w-1/4 lg:w-1/5 h-screen border-r fixed md:static">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="py-3 px-2 border-b">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-8"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col justify-between ">
            <ul>
              <Link to={"/"}>
                <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                  <IoMdHome className="text-3xl mr-3" />
                  <span>Home</span>
                </li>
              </Link>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <CiSearch className="text-3xl mr-3" />
                <span>Explore</span>
              </li>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <IoIosNotifications className="text-3xl mr-3" />
                <span>Notification</span>
              </li>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <MdOutlineMessage className="text-3xl mr-3" />
                <span>Message</span>
              </li>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <GoPeople className="text-3xl mr-3" />
                <span>Communities</span>
              </li>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <FaXTwitter className="text-3xl mr-3" />
                <span>Premium</span>
              </li>
              <Link to={`/profile/${user?._id}`}>
                <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                  <CgProfile className="text-3xl mr-3" />
                  <span>Profile</span>
                </li>
              </Link>
              <li className="flex hover:bg-gray-200 p-2 rounded-full items-center">
                <CiCircleMore className="text-3xl mr-3" />
                <span>More</span>
              </li>
            </ul>
            <button className="bg-blue-500 w-52 py-2 rounded-full text-white font-bold">
              Post
            </button>
          </div>
        </div>
        <div>
          <li
            className="flex hover:bg-gray-100 p-2 rounded-full items-center"
            onClick={logoutHandler}
          >
            <HiOutlineLogout className="text-3xl mr-3" />
            <span>LogOut</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Left;