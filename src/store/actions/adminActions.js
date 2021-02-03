import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Getall admins
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

  // Get all suspended admins
export const getSuspendedAdmin = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(apiUrl + "admin/admins?status=suspended", {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        dispatch({ type: "SuspendedAdmins", data: res.data.data});
      }
    } catch (err) {
      dispatch({ type: "SuspendAdmin_Error", err: err.response?.data?.message });
    }
  };
}

// get admin functionalities
export const getAdminActivities = () => {
  return async (dispatch, getState) => {
    try {
      var userId = getState().auth.profile.id
      const res = await axios.get(apiUrl + "user_activities/"+userId, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        dispatch({ type: "AdminActivities", data: res.data.data});
      }
    } catch (err) {
      dispatch({ type: "Activities_Error", err: err.response?.data?.message });
    }
  };
}




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


//   Activate an admin functionality
export const ActivateAdmin = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: "Restore_Loader", data: user.id });
    try {
      const res = await axios.patch(apiUrl + "admin/activate_admin", { ...user }, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
          dispatch({ type: "StopRestoreLoader" });
          dispatch({type: 'Process_Success'})
        cogoToast.success('Admin successfully restored!', { position: 'bottom-right', })
      }
    } catch (err) {
      // var message = err.response.data
      dispatch({ type: "StopRestoreLoader" });
      cogoToast.error('Error while restoring admin')
    }
  };
};


//   Change password functionality
export const ChangePassword = (user) => {
  return async (dispatch, getState) => {
    
    const values = {
      oldPassword: user.password,
      newPassword: user.newpassword
    }
    try {
      const res = await axios.post(apiUrl + "reset_password", { ...values }, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
          dispatch({ type: "PasswordChanged"})
        cogoToast.success('Password updated successfully! Kindly Login again.', { position: 'bottom-right', })
      }
    } catch (err) {
      // var message = err.response.data
      cogoToast.error('Check that your old password is correct!')
    }
  };
};










  