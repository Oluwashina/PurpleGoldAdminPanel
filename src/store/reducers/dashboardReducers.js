
const initState = {
    payouts: [],
    funding: [],
    fundingSum: 0,
    count: []
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
         default:
             return state
     }
 }
 
 export default dashboardReducer