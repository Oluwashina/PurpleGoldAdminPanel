
const initState = {
   firstname: '',
   lastname: '',
   userId: '',
   loading: false,
   email: '',
   amount: '',
   funding: []
};

const fundReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Email_Valid':
            return {
                ...state,
                firstname: action.data.firstname,
                lastname: action.data.lastname,
                userId: action.data.id,
                loading: true
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
        case 'Funding':
            return{
                ...state,
                funding: action.data.users
            }
        default:
            return state
    }
}

export default fundReducer