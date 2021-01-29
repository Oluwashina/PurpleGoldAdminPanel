
const initState = {
    admins: [],
    loading: false,
 };
 
 const adminReducer = (state = initState, action) => {
     switch (action.type) {
         case 'AllAdmin':
             return {
                 ...state,
                 admins: action.data
             } 
        case 'PasswordChanged':
            return{
                ...state,
                loading: true
            }
         default:
             return state
     }
 }
 
 export default adminReducer