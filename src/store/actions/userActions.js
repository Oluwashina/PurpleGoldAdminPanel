import cogoToast from 'cogo-toast';
import {GetApi, PatchApi} from '../helpers'


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Get funding data for month,year, and week functionality
export const getAllUsers = (values) => {
    return async (dispatch, getState) => {
      try {
        const value = values.filter
        const res = await GetApi("admin/investors?status="+value, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "AllUsers", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Users_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get users by id
  export const GetUserById = (value) =>{
    return async (dispatch, getState) => {
      try {
        const time = value.time
        const id = value.id
        const res = await GetApi("admin/investors/"+id+"?time="+time, getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "UserDetails", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Error_User", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  }

  // suspend a user functionality
  export const SuspendUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      try {
        const res = await PatchApi("admin/deactivate_user", { ...user }, getToken());
        if (res.status === 200) {
            console.log(res)
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad"})
          cogoToast.success('User successfully suspended!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while suspending user')
        }
      } catch (err) {
        // var message = err.response.data
        console.log(err)
      }
    };
  }

  // activate a user
  export const ActivateUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      try {
        const res = await PatchApi("admin/activate_user", { ...user }, getToken());
        if (res.status === 200) {
            console.log(res)
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad"})
          cogoToast.success('User successfully activated!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while activating user')
        }
      } catch (err) {
       console.log(err)
      }
    }
  }
  

//   get count for all users
export const UsersCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("user_count?user=INVESTOR", getToken());
        if (res.status === 200) {
            console.log(res)
          dispatch({ type: "Users_Count", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Count_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  
  export const SearchUser = (value) => {
    return (dispatch, getState) => {
      dispatch({ type: "SearchUser", data: value });
    };
  };










  