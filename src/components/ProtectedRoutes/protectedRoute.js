import React from 'react';
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return ( 
        <Route
        {...rest}
        render={(props) =>
        !isAuthenticated ? (
        <>
         <Redirect to={'/'} />
        </>
      ) : (
        <Component {...props} />
      )
        }
     />
     );
}


const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(ProtectedRoute);

