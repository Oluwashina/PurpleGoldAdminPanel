import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week functionality
export const getAllAdmin = () => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(apiUrl + "admin/admins", {
            headers: {
              Accept: 'application/json',
              appID: 'PGADMIN',
              Authorization: getToken()
            }
          });
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "AllAdmin", data: res.data.data});
        }
      } catch (err) {
        dispatch({ type: "Admin_Error", err: err.response?.data?.message });
      }
    };
  };


//   create a new admin functionality
export const AddAdmin = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.post(apiUrl + "admin/create_admin", { ...user }, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 201) {
          console.log(res)
        cogoToast.success('Admin created successfully!', { position: 'bottom-right', })
      }
    } catch (err) {
      // var message = err.response.data
      cogoToast.error('User or email already exists')
    }
  };
};











  