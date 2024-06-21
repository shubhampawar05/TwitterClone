import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets } from '../redux/TweetSlice';


const useGetMyTweets = () => {
  
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const { refresh, isActive } = useSelector(store => store.tweet);
    

  const fetchMyTweets = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(`http://localhost:10000/api/v1/tweet/alltweets`, { headers });
      console.log(res);
      dispatch(getAllTweets(res?.data?.tweets));
    } catch (error) {
      console.log(error);
    }
  };
  const followingTweetHandler = async () => { 
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const res = await axios.get(`http://localhost:10000/api/v1/tweet/followingtweets`, { headers });
      console.log(res);
      dispatch(getAllTweets(res?.data?.tweets));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      if(isActive){
          fetchMyTweets();
      }else{
          followingTweetHandler();
      }
  }, [isActive,refresh,]);
};

export default useGetMyTweets;
