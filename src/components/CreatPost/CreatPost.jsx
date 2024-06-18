import React from 'react'
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarClock } from "react-icons/lu";

const CreatPost = () => {
  return (
    <div>
        {/* header */}
        <div className=" border-2 flex text-center backdrop-blur-sm w-full">
        <p className=" w-1/2 border p-3 hover:bg-gray-200  hover:font-semibold">
          For You
        </p>
        <p className=" w-1/2 border p-3 hover:bg-gray-200 hover:font-semibold">
          Following
        </p>
      </div>
      {/* post section */}
      <div>
        <div className="flex p-2 border-b-2 ">
          <div>
            <Avatar src="#" size="40" round={true} />
          </div>
          <div className=" flex flex-col w-full">
            <input
              type="text"
              placeholder=" What is happning..?"
              className=" w-[90%] outline-none border-none p-2 ml-4"
            />
            <div className=" flex justify-between px-8 w-full items-center">
             <div className=" flex  gap-6">
             <CiImageOn className=" text-xl text-blue-600" />{" "}
             <BsEmojiSmile className=" text-xl text-blue-600" />
             <LuCalendarClock className=" text-xl text-blue-600"/>
             <CiLocationOn  className=" text-xl text-blue-600" />
             </div>
              <button className=" px-6 py-2 rounded-full bg-blue-500 text-white text-xl">
                Post{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatPost