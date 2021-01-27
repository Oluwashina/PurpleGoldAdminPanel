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
export const AddAdmin = (value) => ((dispatch, getState) => {
    // loader
    dispatch({ type: "Loader" });
    
   const data ={
    firstname: value.firstname,
    lastname: value.lastname,
    phoneNumber: "+234" + value.phone,
    email: value.email,
    password: value.password,
   } 

    axios.post(apiUrl + "admin/create_admin", data, {
        headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
        }
    }).then((res) => {
        if (res.status === 201) {
        cogoToast.success('Admin created successfully!', { position: 'bottom-right', })
        dispatch({ type: "Stop_Loader" });
        } 
    }).catch((err) => {
        cogoToast.error('Email or user already exist')
        dispatch({ type: "Stop_Loader" });
    })
  });










  