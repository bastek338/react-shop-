import React from 'react';
import { Route } from 'react-router-dom';


const PrivateRoute = ({component: Component, currentUser, dispatcher, ...rest}) => (
    <Route
    {...rest}
    render={props => 
        currentUser ? <Component {...props}/> : dispatcher({type: 'initialLogin'})
    }
    >
    </Route>
)

export default PrivateRoute;