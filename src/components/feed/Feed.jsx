import React from "react";

import CreatPost from "../CreatPost/CreatPost";
import Tweet from "../Tweet/Tweet";
import { useSelector } from "react-redux";


const Feed = () => {
  const tweets = useSelector((state)=>state.tweet.allTweets)
  console.log(tweets);

  return (
    <div className=" px-4">
      <CreatPost/>
      {tweets?.map((singelTweet)=>{
        return(
          <Tweet key={singelTweet._id} tweet={singelTweet}/>
        )
      })}
      
    </div>
  );
};

export default Feed;
