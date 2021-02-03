
const initState = {
    isAuthenticated: false,
    token: '',
    profile: {},
    photoloader: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User_LoggedIn':
            localStorage.setItem("token", action.data.token)
            return {
                ...state,
                isAuthenticated: true,
                token: action.data.token,
                profile: {
                    firstname: action.data.firstname,
                    lastname: action.data.lastname,
                    email: action.data.email,
                    imageUrl: action.data.imageUrl,
                    id: action.data.id,
                    phoneNumber: action.data.phoneNumber
                }
            }
        case 'User_Error':
            return {
                ...state,
                isAuthenticated: false,
            }
        case 'logout':
            return {
                ...state,
                isAuthenticated: false,
                token: '',
                profile: {}
            }
        case 'PhotoLoader':
            return{
                ...state,
                photoloader: true
            }
        case 'StopPhotoLoader':
            return{
                ...state,
                photoloader: false
            }
        case 'profilePicture':
            return{
                ...state,
                profile: {
                    imageUrl: action.data
                }
            }
        default:
            return state
    }
}

export default authReducer