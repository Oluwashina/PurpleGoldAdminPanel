
const initState = {
    users: [],
    loading: false,
    usersCount: []
 };
 
 const userReducer = (state = initState, action) => {
     switch (action.type) {
         case 'AllUsers':
             return {
                 ...state,
                 users: action.data
             }
        case 'Users_Count':
            return{
                ...state,
                usersCount : action.data
            }
         default:
             return state
     }
 }
 
 export default userReducer