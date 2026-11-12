import { serverUrl } from "../App";
import axios from "axios";
import { setUser } from "../redux/userSlice.js";
const getCurrentUser = async (dispatch) => {
    try {
        const response = await axios.get(`${serverUrl}/api/user/currentuser`, {
            withCredentials: true, // Include cookies in the request
        });
        // console.log("Response from server:", response.data); // Log the response object
        dispatch(setUser(response.data)); // Update the Redux store with the user data

    } catch (error) {
        console.error("Error fetching current user:", error);
    }

}

export default getCurrentUser;