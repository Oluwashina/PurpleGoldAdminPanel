
const initState = {
    admins: [],
    suspendedAdmins: [],
    loading: false,
    restoreloader: false
 };
 
 const adminReducer = (state = initState, action) => {
     switch (action.type) {
         case 'AllAdmin':
             return {
                 ...state,
                 admins: action.data
             } 
        case 'SuspendedAdmins':
            return{
                ...state,
                suspendedAdmins: action.data
            }
        case 'PasswordChanged':
            return{
                ...state,
                loading: true
            }
        case "Restore_Loader":
            return{
                ...state,
                restoreloader: true
            }
        case "StopRestoreLoader":
            return{
                ...state,
                restoreloader: false
            }
         default:
             return state
     }
 }
 
 export default adminReducer