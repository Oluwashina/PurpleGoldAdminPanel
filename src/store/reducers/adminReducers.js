
const initState = {
    admins: [],
    loading: false
 };
 
 const adminReducer = (state = initState, action) => {
     switch (action.type) {
         case 'AllAdmin':
             return {
                 ...state,
                 admins: action.data
             } 
        case 'Loader':
            return{
                ...state,
                loading: true
            } 
        case 'Stop_Loader':
            return{
                ...state,
                loading: false
            }
         default:
             return state
     }
 }
 
 export default adminReducer