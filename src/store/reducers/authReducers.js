
const initState = {
    isAuthenticated: false,
    token: '',
    profile: {}
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
                    imageUrl: action.data.imageUrl
                }
            }
        case 'User_Error':
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state
    }
}

export default authReducer