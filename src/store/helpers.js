import axios from 'axios'
import {apiUrl} from './config'
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from '../store/reducers/rootReducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

const store = createStore(
    rootReducer,
    //  persistedState,
    enhancer
  )


// post request funcionality
export const PostApi = async (url, payload, token) => {
    try {
    const data  = await axios.post(apiUrl + `${url}`, payload, {
        headers: {
            Accept: 'application/json',
            appID: 'PGADMIN',
            Authorization: token
          }
    });
    return {
        status:  data.status,
        data: data.data
    }
          
    }catch(e){
    // check status code here and redirect to login if 401
      var status = e.response.status
      if(status === 401){
          store.dispatch({type: "logout"})
          return {
            status: status, 
            data: e.response.data
        }
      }
      else{
        return {
            status: status, 
            data: e.response.data
        } 
      }    
   }
};