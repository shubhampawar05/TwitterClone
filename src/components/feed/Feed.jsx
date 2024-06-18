import React from "react";

import CreatPost from "../CreatPost/CreatPost";
import Tweet from "../Tweet/Tweet";


const Feed = () => {
  return (
    <div className="w-[60%] px-4">
      <CreatPost/>
      <Tweet/>
      
    </div>
  );
};

export default Feed;
