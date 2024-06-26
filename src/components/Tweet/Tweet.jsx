import React, { useState } from "react";
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
import { timeSince } from "./../../Utils/Constants";
import { Base_Url } from "./../../Utils/Constants";

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [isLiked, setIsLiked] = useState(tweet.like.some((like) => like === user?._id));

  const likeOrDislikeHandler = async (id) => {
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
        `${Base_Url}/api/v1/tweet/like/${id}`,
        {},
        { headers }
      );
      dispatch(getRefresh());
      toast.dismiss();
      toast.success(res.data.message);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error liking/disliking tweet:", error);
      toast.dismiss();
      toast.error("An error occurred while liking the tweet.");
    }
  };

  const deleteTweetHandler = async (id) => {
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
        `${Base_Url}/api/v1/tweet/delete/${id}`,
        {},
        { headers }
      );
      dispatch(getRefresh());
      toast.dismiss();
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error deleting tweet:", error);
      toast.dismiss();
      toast.error("An error occurred while deleting the tweet.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div className="flex p-4">
        <div>
          <Avatar src="" size="40" round={true} />
        </div>

        <div className="flex flex-col ml-4 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold">{tweet?.userId?.name}</h1>
              <h1 className="text-gray-500 text-sm">
                {`@${tweet?.userId?.username} ${timeSince(tweet?.createdAt)}`}
              </h1>
            </div>
            {user?._id === tweet?.userId?._id && (
              <div
                onClick={() => deleteTweetHandler(tweet?._id)}
                className="p-2 hover:bg-red-300 rounded-full cursor-pointer"
              >
                <MdOutlineDeleteOutline size="24px" />
              </div>
            )}
          </div>
          <div className="my-2">{tweet?.description}</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xl hover:text-blue-400">
              <FaRegComment />
              <span className="text-sm">5</span>
            </div>

            <div
              className={`flex items-center gap-2 text-xl cursor-pointer ${
                isLiked ? "text-red-500" : "hover:text-blue-400"
              }`}
              onClick={() => likeOrDislikeHandler(tweet?._id)}
            >
              {isLiked ? <CiHeart className=" text-red-600 " /> : <CiHeart />}
              <span className="text-sm">{tweet?.like?.length}</span>
            </div>
            <div className="flex items-center gap-2 text-xl hover:text-blue-400">
              <CiBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;