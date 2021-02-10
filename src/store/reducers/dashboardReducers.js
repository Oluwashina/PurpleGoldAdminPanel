
const initState = {
    payouts: [],
    investments: [],
    investmentSum: 0,
    todayCount: 0,
    funding: [],
    chartData: [],
    fundingSum: 0,
    payoutSum: 0,
    count: [],
    isLoading: false,
    chartDayData: [
        { id: 1, name: 'tab-1', text: 'Today', value: 'today' },
        { id: 2, name: 'tab-2', text: 'This Week', value: 'week' },
        { id: 3, name: 'tab-3', text: 'Month', value: 'month' },
        { id: 4, name: 'tab-4', text: 'Year', value: 'year' },
    ],
    chartDate: "today",
    cardActive: "funding",
    cardIndex: 0
 };
 
 const dashboardReducer = (state = initState, action) => {
     switch (action.type) {
         case 'Payout':
             let payoutSum;
             payoutSum = action.data.reduce((acc, cur)=>{
                return acc + parseFloat(cur.totalReturn)
              },0)
             return {
                 ...state,
                 payouts: action.data,
                 payoutSum: payoutSum
             }
        case 'Investment':
            let investSum;
             investSum = action.data.reduce((acc, cur)=>{
                return acc + parseFloat(cur.amount)
              },0)
            return{
                ...state,
                investments: action.data,
                investmentSum: investSum
            } 
        case 'TodayInvest':
            let todaySum;
            todaySum = action.data.reduce((acc, cur)=>{
               return acc + parseFloat(cur.amount)
             },0)
            return{
                ...state,
                investments: action.data,
                investmentSum: todaySum,
                todayCount: action.data.length
            }
        case 'Funding':
            let fundingSum;
            let data = action.data[0].users
            fundingSum = data.reduce((acc, cur)=>{
               return acc + parseFloat(cur.amount)
             },0)
            return{
                ...state,
                funding: action.data[0].users,
                fundingSum: fundingSum
            }
        case 'ChartData':
            return{
                ...state,
                chartData: action.data[0].users, 
            }
        case 'ToggleChartDay':
            return{
                ...state,
                chartDate: action.data
            }
        case 'ToggleCard':
            var index = action.data
            var active;
            switch(index){
                case 0:
                    active = "funding"
                    break;
                case 1:
                    active= "in_flow"
                    break;
                case 2:
                    active= "out_flow"
                    break;
                case 3:
                    active= "active_users"
                    break;
                case 4:
                    active= "inactive_users"
                    break;
                case 5:
                    active= "suspended_users"
                    break;    
                default:
                console.log("Today")
                    
            }
            return{
                ...state,
                cardIndex: action.data,
                cardActive: active

            } 
        case 'Dashboard_Count':
            return{
                ...state,
                count: action.data
            }
        case 'Start_Loader':
            return{
                ...state,
                isLoading: true
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