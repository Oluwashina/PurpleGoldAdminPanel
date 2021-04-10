
const initState = {
    marketersSummary: {},
    marketers: [],
    allMarketers: [],
    MarketersInflow: [],
    marketersProfile: {},
    activeCustomers: [],
    inactiveCustomers: [],
    marketersuspendloader: false,
    totalInflow: [],
    totalCommission: []
 };
 
 const marketersReducer = (state = initState, action) => {
     switch (action.type) {
         case 'TotalDetails':
             return {
                 ...state,
                 marketersSummary: action.data
           }
        case 'Marketers':
            return{
                ...state,
                marketers: action.data
            }
        case 'AllMarketers':
            return{
                ...state,
                allMarketers: action.data
            }
        case 'MarketersInflow':
            return{
                ...state,
                MarketersInflow: action.data
            }
        case 'getProfile':
            let profile = state.allMarketers.find(pro=> pro.id === action.id)
            return{
                ...state,
                marketersProfile: profile
            }
        case 'activeCustomers':
            return{
                ...state,
                activeCustomers: action.data
            }
        case 'inactiveCustomers':
            return{
                ...state,
                inactiveCustomers: action.data
            }
        case 'TotalMarketerInflow':
            return{
                ...state,
                totalInflow: action.data
            }
        case 'TotalCommission':
            return{
                ...state,
                totalCommission: action.data
            }
        case 'marketerSuspendLoader':
            return{
                ...state,
                marketersuspendloader: true
            }
        case 'stopMarketerSuspendLoader':
            return{
                ...state,
                marketersuspendloader: false
            }
        case 'successSuspend':
            let newStatus;
            let res = state.marketersProfile.isActive
                switch(res){
                    case 1:
                        newStatus = 0;
                    break;
                    case 0:
                        newStatus = 1;
                        break;
                    default:
                        break;
                }
            return{
                ...state,
                marketersProfile: {
                    ...state.marketersProfile,
                    isActive: newStatus
                }

            }
         default:
             return state
     }
 }
 
 export default marketersReducer