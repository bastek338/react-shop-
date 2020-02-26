import React, {useState, useReducer, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import Auth from './pages/Auth/Auth';
import { Route, Switch, withRouter } from 'react-router-dom';
import { auth } from './firebase/firebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const ClosedContext = React.createContext(false);

const initialState = {
    initialLogin: false,
    login: false,
    register: false,
}

function reducerSlider (state, action) {
  switch(action.type) {
    case 'initialLogin': 
      return {
        ...state,
        initialLogin: true
      }
    case 'login':
      return {
        initialLogin: false,
        login: true,
        register: false
      }
    case 'register': 
      return {
        initialLogin: false,
        login: false,
        register: true
      }
  }
}

function App(props) {
  const [sliderState, dispatch] = useReducer(reducerSlider, initialState)
  const [closed, setClosed] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  let unsubscribeFromAuth = null;
  
  useEffect(() => {
    if(currentUser){
      setClosed(false);
    }

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [currentUser])

  const closeSideBarHandler = () => {
    setClosed(false);
  }
  
  const openSideBarHandler = (path, typeofDispatch) => { 
      if(currentUser == null){
        setClosed(true)
        dispatch(typeofDispatch);
      } else {
        props.history.push(path);
        setClosed(false);
      }
  }
  return (
    <div>
      <Navigation dispatcher={dispatch} openHandler={openSideBarHandler} currentUser={currentUser}/>
      <Switch>
          <Route 
          exact 
          path='/' 
          >
            <ClosedContext.Provider value={{closed: closed, closeHandler: closeSideBarHandler, sliderState, dispatch}}>
              <HomePage/>
            </ClosedContext.Provider>
          </Route>
          <Route path="/shop" component={ShopPage} dispatcher={dispatch} currentUser={currentUser}/>
          <Route path="/myprofile" render={() => <h1>Hello from myprofile</h1>}/>
        
     </Switch> 
    </div>
  );
}

export default withRouter(App);
