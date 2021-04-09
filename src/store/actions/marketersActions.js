import cogoToast from 'cogo-toast';
import {GetApi, PatchApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// dashboard count
export const TotalDetails = (values) => {
    return async (dispatch, getState) => {
      dispatch({type: 'Start_Loader'})
      try {
          const user = values
        const res = await GetApi("dahboard_count?user="+user, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "TotalDetails", data: res.data.data});
          dispatch({type: 'Stop_Loader'})
        }
        if(res.status === 400){
          dispatch({ type: "Total_Error", err: res.data });
          dispatch({type: 'Stop_Loader'})
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

//   get all marketers
export const getMarketersLimit = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("admin/marketers?limit=5", getToken());
        if (res.status === 200) {
           
          dispatch({ type: "Marketers", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Marketers_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  //   get all marketers
export const getMarketers = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("admin/marketers", getToken());
        if (res.status === 200) {
           
          dispatch({ type: "AllMarketers", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Marketers_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  // get marketers with time filters
  export const getMarketersWithFilters = (values) => {
    return async (dispatch, getState) => {
      try {
        const time = values.time
        const res = await GetApi("admin/marketers?time="+time, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "MarketersInflow", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Inflow_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

 
//   fliter a marketer profile from all marketers
export const getMarketersProfile = (id) =>{
    return dispatch =>{
        dispatch({ type: "getProfile", id });
    }
}


  //   get all marketers
export const getActive = (status, id) => {
    return async (dispatch, getState) => {
      try {
        const activeid = id
        const activeStatus = status
        const res = await GetApi("marketers/customer/"+activeid+"?status="+activeStatus, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "activeCustomers", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Customers_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };

  //   get all marketers
export const getInactive = (status, id) => {
    return async (dispatch, getState) => {
      try {
        const inactiveid = id
        const inActiveStatus = status
        const res = await GetApi("marketers/customer/"+inactiveid+"?status="+inActiveStatus, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "inactiveCustomers", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Customers_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  // get a marketer's  total inflow
  export const getMarketerInflow = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const id = values.id
        const res = await GetApi("reports/marketer_in_flow/"+id+"?user="+user+"&time="+time, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "TotalMarketerInflow", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Inflow_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


  // get a marketers total commission
  export const getMarketerCommission = (values) => {
    return async (dispatch, getState) => {
      try {
          const time = values.time
          const user = values.user
          const id = values.id
        const res = await GetApi("reports/marketer_commission/"+id+"?user="+user+"&time="+time, getToken());
        if (res.status === 200) {
           
          dispatch({ type: "TotalCommission", data: res.data.data});
        }
        if(res.status === 400){
          dispatch({ type: "Commission_Error", err: res.data });
        }
      } catch (err) {
        console.log(err)
      }
    };
  };




  // suspend a marketer functionality
  export const SuspendMarketer = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      try {
        const res = await PatchApi("admin/deactivate_user", { ...user }, getToken());
        if (res.status === 200) {
            
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad"})
          cogoToast.success('Marketer successfully suspended!', { position: 'top-center', })
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







  