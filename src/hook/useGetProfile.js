import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../redux/UserSlice';

const useGetProfile = (id) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    const getProfile = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const res = await axios.get(`http://localhost:10000/api/v1/user/profile/${id}`, { headers });
        console.log(res);
        dispatch(getUserProfile(res?.data?.userData));
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      getProfile();
    }
  }, [token, id]);

  return null; // Since this is a custom hook, it doesn't need to return JSX
};

export default useGetProfile;
