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
    dispatch({ type: "Restore_Loader" });
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
    
    // get image url uploaded to cloudinary first

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


// Upload a profile picture functionality
export const UploadPhoto = () => {
  return async (dispatch, getState) => {


    const values = {
      firstname: getState().auth.profile.firstname,
      lastname: getState().auth.profile.lastname,
      email: getState().auth.profile.email,
      imageUrl: getState().auth.profile.imageUrl
    }

    try {
      const res = await axios.patch(apiUrl + "investor/update_profile", { ...values }, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken()
          }
        });
      if (res.status === 200) {
          console.log(res)
        cogoToast.success('Updated Successfully!,Profile picture will be effected at next login!', { position: 'bottom-right', })
      }
    } catch (err) {
      // var message = err.response.data
      cogoToast.error('Error while uploading image!')
    }
  };
};










  