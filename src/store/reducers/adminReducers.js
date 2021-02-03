
const initState = {
    admins: [],
    suspendedAdmins: [],
    restoreloader: [],
    success: false,
    activities: []
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
                suspendedAdmins: action,
                success: false
            }
        case 'AdminActivities':
            return{
                ...state,
                activities: action.data
            }
        case "Restore_Loader":
            return{
                ...state,
                restoreloader: [...state.restoreloader, action.data]
            }
        case "StopRestoreLoader":
            return{
                ...state,
                restoreloader: state.restoreloader.splice(1)
            }
        case 'Process_Success':
            return{
                ...state,
                success: true
            }
         default:
             return state
     }
 }
 
 export default adminReducer