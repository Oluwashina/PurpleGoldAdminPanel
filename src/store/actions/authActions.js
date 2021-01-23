import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';


// login user actions functionality
export const loginUser = (user) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(apiUrl + "auth", { ...user }, {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN'
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "User_LoggedIn", data: res.data.data });
          cogoToast.success('Login successful!')
        }
      } catch (err) {
        dispatch({ type: "User_Error", err: err.response?.data?.message });
        cogoToast.error('Invalid Credentials!')
      }
    };
  };


  export const logOut = () => {
    return (dispatch, getState) => {
      localStorage.setItem("token", "")
      dispatch({ type: "logout", err: "User Out" });
    };
  };
  