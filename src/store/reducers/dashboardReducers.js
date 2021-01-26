
const initState = {
    payouts: [],
    funding: [],
    fundingSum: 0,
    count: [],
    isLoading: true
 };
 
 const dashboardReducer = (state = initState, action) => {
     switch (action.type) {
         case 'Payout':
             return {
                 ...state,
                 payouts: action.data
             }
        case 'Funding':
            return{
                ...state,
                funding: action.data[0].users,
                fundingSum: action.data[0].fundingSum
            }
        case 'Dashboard_Count':
            return{
                ...state,
                count: action.data
            }
        case 'Stop_Loader':
            return{
                ...state,
                isLoading: false
            }
         default:
             return state
     }
 }
 
 export default dashboardReducer