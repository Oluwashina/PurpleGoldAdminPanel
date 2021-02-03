
const initState = {
    isAuthenticated: false,
    token: '',
    firstname: "",
    lastname: "",
    email: "",
    imageUrl: "",
    id: "",
    phoneNumber: "",
    photoloader: false,
    loading: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'User_LoggedIn':
            localStorage.setItem("token", action.data.token)
            return {
                ...state,
                isAuthenticated: true,
                token: action.data.token,
                firstname: action.data.firstname,
                lastname: action.data.lastname,
                email: action.data.email,
                imageUrl: action.data.imageUrl,
                id: action.data.id,
                phoneNumber: action.data.phoneNumber,
                loading: false
                
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
                firstname: "",
                lastname: "",
                email: "",
                imageUrl: "",
                id: "",
                phoneNumber: ""
                
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
                imageUrl: action.image
                
            }
        case 'PasswordChanged':
            return{
                ...state,
                loading: true,
                isAuthenticated: false,
                token: '',
                firstname: "",
                lastname: "",
                email: "",
                imageUrl: "",
                id: "",
                phoneNumber: ""
            }
        default:
            return state
    }
}

export default authReducer