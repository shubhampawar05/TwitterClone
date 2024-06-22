import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getOtherUser } from '../redux/UserSlice';
import {Base_Url} from './../Utils/Constants'

const useOtherUser = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const getProfile = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const res = await axios.get(`${Base_Url}/api/v1/user/otherUser`, { headers });
        console.log(res.data.otheruserData);
        dispatch(getOtherUser(res?.data?.otheruserData));
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      getProfile();
    }
  }, [token, dispatch]);

  return null; // Since this is a custom hook, it doesn't need to return JSX
};

export default useOtherUser;
