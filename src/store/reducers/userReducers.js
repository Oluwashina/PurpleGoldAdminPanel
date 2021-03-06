
const initState = {
    users: [],
    usersSearch: [],
    loading: false,
    isLoading: false,
    susloader: false,
    usersCount: [],
    userDetails: [],
    lastname: "",
    firstname: "",
    createdAt: "",
    dob: "",
    email: "", 
    phoneNumber: "",
    houseOfResidence: "",
    bank: "",
    accountNumber: "",
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
                 users: action.data,
                 usersSearch: action.data
             }
        case 'User_Loader':
            return{
                ...state,
                isLoading: true
            }
        case 'StopUser_Loader':
            return{
                ...state,
                isLoading: false
            }
        case 'SearchUser':
            var word = action.data
            let user = state.usersSearch.filter(function (item) {
                return item.email.toLowerCase().includes(word.toLowerCase());
            });
            return{
                ...state,
                users: user
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
                dob: action.data[0].dob,
                email: action.data[0].email,
                phoneNumber: action.data[0].phoneNumber,
                bank: action.data[0].bank,
                accountNumber: action.data[0].accountNumber,
                houseOfResidence: action.data[0].houseOfResidence,
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