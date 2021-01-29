
const initState = {
    request: [],
    processingRequest: [],
    requestCount: [],
    paidRequest: [],
    declinedRequest: [],
    pendingCount: 0,
    processingCount: 0,
    paidCount: 0,
    declinedCount: 0,
    processloader: false,
    paidloader: false,
    declinedloader: false
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
        case 'Process_Loader':
            return{
                ...state,
                processloader: true
            }
        case 'StopProcessLoader':
            return{
                ...state,
                processloader: false
            }
        case 'Paid_Loader':
            return{
                ...state,
                paidloader: true
            }
        case 'StopPaidLoader':
            return{
                ...state,
                paidloader: false
            }
        case 'Declined_Loader':
            return{
                ...state,
                declinedloader: true
            }
        case 'StopDeclinedLoader':
            return{
                ...state,
                declinedloader: false
            }
         default:
             return state
     }
 }
 
 export default withdrawReducer