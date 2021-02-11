import cogoToast from 'cogo-toast';
import {GetApi, PostApi, PatchApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Getall admins
export const getAllAdmin = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("admin/admins", getToken());
        if (res.status === 200) {
          dispatch({ type: "AllAdmin", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Admin_Error", err: res.data });
        }
        if(res.status === 401){
          dispatch({type: "logout"})
          cogoToast.info("Session Expired! Please Login again!")
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  // Get all suspended admins
export const getSuspendedAdmin = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("admin/admins?status=suspended", getToken());
      if (res.status === 200) {
        dispatch({ type: "SuspendedAdmins", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "SuspendAdmin_Error", err: res.data });
      }
      if(res.status === 401){
        dispatch({type: 'logout'})
          cogoToast.info("Session Expired! Please Login again!")
      }
    } catch (err) {
      console.log(err)
    }
  };
}

// get admin functionalities
export const getAdminActivities = () => {
  return async (dispatch, getState) => {
    try {
      var userId = getState().auth.id
      const res = await GetApi("user_activities/"+userId, getToken());
      if (res.status === 200) {
        dispatch({ type: "AdminActivities", data: res.data.data});
      }
      if(res.status === 400){
        dispatch({ type: "Activities_Error", err: res.data });
      }
      if(res.status === 401){
        dispatch({type: 'logout'})
        cogoToast.info("Session Expired! Please Login again!")
      }
    } catch (err) {
      console.log(err)
    }
  };
}


//   create a new admin functionality
export const AddAdmin = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("admin/create_admin", { ...user }, getToken(), "application/json");
      if (res.status === 201) {
        cogoToast.success('Admin created successfully!', { position: 'bottom-right', })
      }
      if(res.status === 400){
        cogoToast.error('User or email already exists')
      }
      if(res.status === 401){
        dispatch({type: 'logout'})
        cogoToast.info("Session Expired! Please Login again!")
      }
    } catch (err) {
      // var message = err.response.data
      console.log(err)
    }
  };
};


//   Activate an admin functionality
export const ActivateAdmin = (user) => {
  return async (dispatch, getState) => {
    dispatch({ type: "Restore_Loader", data: user.id });
    try {
      const res = await PatchApi("admin/activate_admin", { ...user }, getToken())
      if (res.status === 200) {
          dispatch({ type: "StopRestoreLoader" });
          dispatch({type: 'Process_Success'})
        cogoToast.success('Admin successfully restored!', { position: 'bottom-right', })
      }
      if(res.status === 400){
        dispatch({ type: "StopRestoreLoader" });
        cogoToast.error('Error while restoring admin')
      }
      if(res.status === 401){
        dispatch({type: 'logout'})
        cogoToast.info("Session Expired! Please Login again!")
      }
    } catch (err) {
      console.log(err)
    }
  };
};













  