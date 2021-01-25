
const initState = {
    payouts: []
 };
 
 const dashboardReducer = (state = initState, action) => {
     switch (action.type) {
         case 'Payout':
             return {
                 ...state,
                 payouts: action.data
             }
         default:
             return state
     }
 }
 
 export default dashboardReducer