import {apiUrl} from '../config'
import axios from 'axios'
import cogoToast from 'cogo-toast';



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

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
          cogoToast.success('Login Successful!', { position: 'bottom-right', })
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
  
  
// Upload a profile picture functionality
export const UploadPhoto = (value) => {
  return async (dispatch, getState) => {
    dispatch({ type: "PhotoLoader"});
      let formdata = new FormData()
      formdata.append("fileName", value);
    try {
      const res = await axios.post(apiUrl + "files", formdata, {
          headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: getToken(),
            contentType: 'multipart/form-data'
          }
        });
      if (res.status === 200) {
          console.log(res)
            var image = res.data.data
            // actual call to update profile 
            dispatch({type: "profilePicture", image})
              const values = {
                firstname: getState().auth.profile.firstname,
                lastname: getState().auth.profile.lastname,
                email: getState().auth.profile.email,
                phoneNumber: getState().auth.profile.phoneNumber,
                imageUrl: image
              }
              axios.patch(apiUrl + "investor/update_profile", values, {
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
    } catch (err) {
      // var message = err.response.data
      cogoToast.error('Error while uploading image!')
      dispatch({ type: "StopPhotoLoader"});
    }
  };
};

