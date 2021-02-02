
const initState = {
    users: [],
    loading: false,
    susloader: false,
    usersCount: [],
    userDetails: [],
    lastname: "",
    firstname: "",
    createdAt: "",
    totalAmountInvested: 0,
    totalWithdrawn: 0,
    walletBalance: "",
    investments: [],
    walletActions: [],
    withdrawals: [],
    isActive: 1,
    success: false,
    imageUrl: ""
    
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
        case 'UserDetails':
            return{
                ...state,
                userDetails: action.data,
                firstname: action.data[0].firstname,
                lastname: action.data[0].lastname,
                createdAt: action.data[0].createdAt,
                totalAmountInvested: action.data[0].totalAmountInvested,
                walletBalance: action.data[0].walletBalance,
                totalWithdrawn: action.data[0].totalWithdrawn,
                investments: action.data[0].investments,
                walletActions: action.data[0].walletActions,
                withdrawals: action.data[0].withdrawals,
                isActive: action.data[0].isActive,
                imageUrl: action.data[0].imageUrl,
                success: false
            }
        case 'Suspend_Loader':
            return{
                ...state,
                susloader: true
            }
        case 'StopSuspendLoader':
            return{
                ...state,
                susloader: false
            }
        case 'SuccessLoad':
            return{
                ...state,
                success: true
            } 
         default:
             return state
     }
 }
 
 export default userReducer