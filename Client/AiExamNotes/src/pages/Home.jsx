import React from 'react'
import axios from 'axios'
import {serverUrl} from '../App'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/userSlice.js'
function Home () {
const Navigate = useNavigate();
const dispatch = useDispatch();

const handleLogout= async ()=>{
   try {
     await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
      dispatch(setUser(null)); // Clear the user data in Redux store
      Navigate('/auth', { replace: true });
   } catch (error) {
     console.error("Error occurred while logging out:", error);
   }
}

  return (
    <>
    <div>home helloo
      
       </div>
      <button className="m-4 border 2px solid bg-blend-color-dodge " onClick={handleLogout} > logout</button>
    </>
  )
}

export default Home 