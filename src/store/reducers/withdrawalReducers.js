
const initState = {
    request: [],
    processingRequest: [],
    requestCount: [],
    paidRequest: [],
    declinedRequest: [],
    pendingCount: 0,
    processingCount: 0,
    paidCount: 0,
    declinedCount: 0
 };
 
 const withdrawReducer = (state = initState, action) => {
     switch (action.type) {
         case 'WithdrawRequest':
             return {
                 ...state,
                 request: action.data
             }
        case 'ProcessingRequest':
            return{
                ...state,
                processingRequest: action.data
            }
        case 'PaidRequest':
            return{
                ...state,
                paidRequest: action.data
            }
        case 'DeclinedRequest':
            return{
                ...state,
                declinedRequest: action.data
            }
        case 'Request_Count':
            var count = action.data
            return{
                ...state,
                requestCount : action.data,
                pendingCount: count[0].pending,
                processingCount: count[1].processing,
                paidCount: count[2].paid,
                declinedCount: count[3].declined,
            }
         default:
             return state
     }
 }
 
 export default withdrawReducer