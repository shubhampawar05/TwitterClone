import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import useGetProfile from "../../hook/useGetProfile";
import { useSelector } from "react-redux";


const Profile = () => {
  const {id} = useParams()
  useGetProfile(id);
  const {profile} = useSelector((state)=>state.user)
  console.log(profile);


  return (
    <div className="w-[60%] px-4 border-l border-r border-[gray-500]">
      <div>
        <div className=" flex items-center py-2  ">
          <Link to={"/"}>
            {" "}
            <div className=" p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoMdArrowBack  className=" text-xl"/>
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
        {/* profile photo and edit btn */}
        <div className=" relative flex items-center justify-between w-full">
          <span>
            <Avatar
              twitterHandle="sitebase"
              size="100"
              round={true}
              className=" absolute -bottom-1 left-2 "
            />
          </span>
          <span className=" p-2 border border-black rounded-full mt-2">
            Edit Profile
          </span>
        </div>

        {/* profile name and user Name */}
        <div className=" p-4">
          <h1 className=" font-bold text-xl">{profile.name} </h1>
          <h1 className=" text-gray-500 text-sm">{profile.username}</h1>
        </div>
        {/* bio */}
        <p className=" px-4 text-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus delectus deserunt neque commodi. Vero inventore consectetur veritatis perferendis itaque, ducimus, odit debitis ut error molestiae, iusto nemo ratione aperiam?
        </p>
      </div>
    </div>
  );
};

export default Profile;
