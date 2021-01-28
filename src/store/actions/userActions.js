import {apiUrl} from '../config'
import axios from 'axios'
// import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week functionality
export const getAllUsers = (values) => {
    return async (dispatch, getState) => {
      try {
        const value = values.filter
        const res = await axios.get(apiUrl + "admin/investors?status="+value, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "AllUsers", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Users_Error", err: err.response?.data?.message });
      }
    };
  };


//   get count for all users
export const UsersCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(apiUrl + "user_count?user=INVESTOR", {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Users_Count", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Count_Error", err: err.response?.data?.message });
      }
    };
  };











  