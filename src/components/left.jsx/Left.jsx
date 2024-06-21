import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
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

const Left = () => {
  const {user} = useSelector((state)=>state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`https://twitterclonebackend-vt4v.onrender.com/api/v1/user/logout`);
            dispatch(getUser(null));
            dispatch(getOtherUser(null));
            dispatch(getUserProfile(null));
            dispatch(getAllTweets(null));
            localStorage.clear("token");
            
            navigate('/login');
            toast.dismiss()
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    }

  console.log(user);
  return (
    <div className="w-[20%] h-screen border fixed  ">
      <div>
        <div className=" py-3 px-2 border-b">
          {/* logo */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"
            className=" w-8 "
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>{" "}
        </div>
        <div className=" flex flex-col justify-between h-[93vh] border-r ">
          <div>
            {/* multipleitems */}
            <ul>
              <Link to={"/"}>
                {" "}
                <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                  <IoMdHome className=" text-3xl mr-3" />
                  <span>Home</span>
                </li>
              </Link>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <CiSearch className=" text-3xl mr-3" />
                Explore
              </li>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <IoIosNotifications className=" text-3xl mr-3" />
                Notification
              </li>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <MdOutlineMessage className=" text-3xl mr-3" />
                Message
              </li>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <GoPeople className=" text-3xl mr-3" />
                Communities
              </li>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <FaXTwitter className=" text-3xl mr-3" />
                Premium
              </li>
              <Link to={`/profile/${user?._id}`}>
                {" "}
                <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                  <CgProfile className=" text-3xl mr-3" />
                  Profile
                </li>
              </Link>
              <li className=" flex hover:bg-gray-200 p-2 rounded-full items-center  ">
                <CiCircleMore className=" text-3xl mr-3" />
                More
              </li>
            </ul>
            <button className=" bg-blue-500 w-52 py-2 rounded-full text-white font-bold ">
              Post
            </button>
          </div>
          {/* user profile */}
          {/* <div>
            <div className=" flex  gap-2 items-center">
              <div>
                <Avatar twitterHandle="sitebase" size="40" round={true} />
              </div>
              <div>
                <p>name</p>
                <p>user Name</p>
              </div>
            </div>
          </div> */}
          <div>
          <li className=" flex hover:bg-gray-100 p-2 rounded-full items-center  "
          onClick={logoutHandler}>
                <HiOutlineLogout className=" text-3xl mr-3" />
               LogOut
              </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
