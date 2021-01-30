
const initState = {
    payouts: [],
    funding: [],
    chartData: [],
    fundingSum: 0,
    payoutSum: 0,
    count: [],
    isLoading: true,
    chartDayData: [
        { id: 1, name: 'tab-1', text: 'Today', value: 'today' },
        { id: 2, name: 'tab-2', text: 'This Week', value: 'week' },
        { id: 3, name: 'tab-3', text: 'Month', value: 'month' },
        { id: 4, name: 'tab-4', text: 'Year', value: 'year' },
    ],
    chartDate: "today"
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
        case 'Funding':
            return{
                ...state,
                funding: action.data[0].users,
                fundingSum: action.data[0].fundingSum
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