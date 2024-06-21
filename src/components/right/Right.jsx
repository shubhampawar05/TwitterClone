import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import useGetProfile from "../../hook/useGetProfile";
import { useSelector } from "react-redux";
import useOtherUser from "../../hook/useOtherUser";
import { Link } from "react-router-dom";
const Right = () => {
  
  const {otherUser} = useSelector((state)=>state.user)

  return (
    <div className=" w-[20%] ml-[2%] ">
      {/* search bar */}
      <div className=" flex items-center p-2 bg-gray-100 rounded-full outline-none">
        <CiSearch />
        <input
          type="text"
          className=" bg-transparent outline-none px-2 "
          placeholder=" Search"
        />
      </div>
      {/* who to follow */}
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow</h1>
        <div>
        {
          otherUser?.slice(0,5).map((single)=>{
            return(
              <div className="flex items-center justify-between my-6 ">
              <div className="flex">
                 <div>
                   <Avatar
                     src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                     size="40"
                     round={true}
                   />
                 </div>
                 <div className="ml-2">
                   <h1 className="font-bold">{single.name}</h1>
                   <p className="text-sm">{`@${single.username}`}</p>
                 </div>
               </div>
               <div>
                <Link to={`/profile/${single?._id}`}>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                   Profile
                 </button>
                </Link>
               </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};

export default Right;
