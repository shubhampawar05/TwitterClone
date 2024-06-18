import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
  return (
    <div>
      <div>
        <div className=" flex p-2 border-b-2">
          <div>
            <Avatar src="" size="40" round={true} />
          </div>

          <div className=" flex flex-col ml-2 ">
            <div className=" flex items-center ">
              <h1 className=" font-bold">Shubham Chopde</h1>
              <h1 className=" text-gray-500 text-sm ml-2">@UserName . 1m</h1>
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              rerum dolorem ex eaque suscipit. Blanditiis cum porro quis sunt
              alias repellat earum necessitatibus expedita doloremque
              laboriosam. Itaque perferendis distinctio repudiandae.
            </div>
            <div className=" flex justify-between px-2 py-1">
              <span className=" flex items-center gap-1 text-xl hover:text-blue-400">
                {" "}
                <FaRegComment className=" " />{" "}
                <span className=" text-sm">5 </span>
              </span>

              <span className=" flex items-center gap-1 text-xl hover:text-blue-400">
                <AiOutlineRetweet />
                <span className=" text-sm">5 </span>
              </span>
              <span className=" flex items-center gap-1 text-xl hover:text-blue-400">
                <CiHeart />
                <span className=" text-sm">5 </span>
              </span>
              <span className=" flex items-center gap-1 text-xl hover:text-blue-400">
                <CiBookmark />
               
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
