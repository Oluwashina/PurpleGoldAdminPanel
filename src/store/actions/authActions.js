import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';
import {PostApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// login user actions functionality
export const loginUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("auth", {...user}, "", "application/json")
      if (res.status === 200) {
        dispatch({ type: "User_LoggedIn", data: res.data.data });
        cogoToast.success('Login Successful!', { position: 'bottom-right', })
      }
      if(res.status === 400){
        dispatch({ type: "User_Error", err: res.data});
        cogoToast.error('Invalid Credentials!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};


  // forgot password functionality
  export const forgotPassword = (user) => {
    return async (dispatch, getState) => {
      try {
        const res = await PostApi("forgot_password", { ...user }, "", "application/json");
        if (res.status === 200) {
          cogoToast.success('Check your email for password reset instructions!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "Forgot_Error", err: res.data });
          cogoToast.error('Email Address not valid!')
        }
      } catch (err){
        console.log(err)
      }
    };
  };


  export const logOut = () => {
    return (dispatch, getState) => {
      localStorage.setItem("token", "")
      dispatch({ type: "logout", err: "User Out" });
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
      const res = await PostApi("reset_password", { ...values }, getToken(), "application/json");
      if (res.status === 200) {
          dispatch({ type: "PasswordChanged"})
        cogoToast.success('Password updated successfully! Kindly Login again.', { position: 'bottom-right', })
      }
      if(res.status === 400){
        cogoToast.error('Check that your old password is correct!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};
  
// Upload a profile picture functionality
export const UploadPhoto = (value) => {
  return async (dispatch, getState) => {
    dispatch({ type: "PhotoLoader"});
      let formdata = new FormData()
      formdata.append("fileName", value);
    try {
      const res = await PostApi("files", formdata, getToken(), "multipart/form-data");
      if (res.status === 200) {
            var image = res.data.data
            // actual call to update profile 
            dispatch({type: "profilePicture", image})
              const values = {
                firstname: getState().auth.firstname,
                lastname: getState().auth.lastname,
                phoneNumber: getState().auth.phoneNumber,
                imageUrl: image
              }
              axios.patch(apiUrl + "investor/update_profile", {...values}, {
                  headers: {
                      Accept: 'application/json',
                      appID: 'PGADMIN',
                      Authorization: getToken()
                  }
              }).then((res) => {
                  if (res.status === 200) {
                    dispatch({ type: "StopPhotoLoader"});
                    cogoToast.success('Profile updated successfully!', { position: 'top-center',heading: 'PurpleGold' })
                  } 
              }).catch((err) => {
                 dispatch({ type: "StopPhotoLoader"});
                  cogoToast.error('Error while uploading picture!',{ position: 'top-center',heading: 'PurpleGold' })
              })
        }
        if(res.status === 400 || res.status === 404){
          cogoToast.error('Error while uploading image!')
          dispatch({ type: "StopPhotoLoader"});
        }
    } catch (err) {
      // var message = err.response.data
        console.log(err)
    }
  };
};

