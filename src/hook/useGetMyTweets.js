import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllTweets } from '../redux/TweetSlice';


const useGetMyTweets = (id) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const fetchMyTweets = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const res = await axios.get(`http://localhost:10000/api/v1/tweet/profile`, { headers });
        console.log(res);
        dispatch(getAllTweets(res?.data));
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      fetchMyTweets();
    }
  }, [token, id]);

  return null; // Since this is a custom hook, it doesn't need to return JSX
};

export default useGetMyTweets;
