import { useEffect } from 'react';
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
        dispatch(getUserProfile(res?.data?.userData)); // Ensure userData is correct as per your API response
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      getProfile();
    }
  }, [token, id, dispatch]);

  return null;
};

export default useGetProfile;
