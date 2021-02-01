
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
    processloader: [],
    paidloader: [],
    declinedloader: [],
    success: false
 };
 
 const withdrawReducer = (state = initState, action) => {
     switch (action.type) {
         case 'WithdrawRequest':
             return {
                 ...state,
                 request: action.data,
                 success: false
             }
        case 'ProcessingRequest':
            return{
                ...state,
                processingRequest: action.data,
                success: false
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
                processloader: [...state.processloader, action.data]
            }
        case 'StopProcessLoader':
            return{
                ...state,
                processloader: state.processloader.splice(1)
            }
        case 'Process_Success':
            return{
                ...state,
                success: true
            }
        case 'Paid_Loader':
            return{
                ...state,
                paidloader: [...state.paidloader, action.data]
            }
        case 'StopPaidLoader':
            return{
                ...state,
                paidloader: state.paidloader.splice(1)
            }
        case 'Declined_Loader':
            return{
                ...state,
                declinedloader:  [...state.declinedloader, action.data]
            }
        case 'StopDeclinedLoader':
            return{
                ...state,
                declinedloader: state.declinedloader.splice(1)
            }
         default:
             return state
     }
 }
 
 export default withdrawReducer