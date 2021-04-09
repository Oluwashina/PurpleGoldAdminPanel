
const initState = {
    marketersSummary: {},
    marketers: [],
    allMarketers: [],
    MarketersInflow: [],
    marketersProfile: {},
    activeCustomers: [],
    inactiveCustomers: [],
    susloader: false,
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
         default:
             return state
     }
 }
 
 export default marketersReducer