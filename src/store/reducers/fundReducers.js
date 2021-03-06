
const initState = {
   firstname: '',
   lastname: '',
   userId: '',
   loading: false,
   email: '',
   amount: '',
   loader: false,
   confirmed: false
};

const fundReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Loader' :
            return{
                ...state,
                loader: true,
            }
        case 'Stop_Loader':
            return{
                ...state,
                loader: false,
            }
        case 'Fund_Successful':
            return{
                ...state,
                confirmed: true
            }
        case 'Email_Valid':
            return {
                ...state,
                firstname: action.data.firstname,
                lastname: action.data.lastname,
                userId: action.data.id,
                loading: true,
                confirmed: false
            }
        case 'Fund_Details':
            return{
                ...state,
                email: action.data.email,
                amount: action.data.amount
            }
        case 'CancelFund':
            return{
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default fundReducer