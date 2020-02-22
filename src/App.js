import React, {useState, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import Auth from './pages/Auth/Auth';
import SlideBarChanger from './components/SlideBarChanger/SlideBarChanger';
import { Route, Switch, withRouter } from 'react-router-dom';

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
  
  const auth = false;
  const [sliderState, dispatch] = useReducer(reducerSlider, initialState)
  const [closed, setClosed] = useState(false);
  
  const closeSideBarHandler = () => {
    setClosed(false);
  }
  


  const openSideBarHandler = (e) => { 
      if(!auth){
        setClosed(true)
      } else {
        props.history.push('/shop');
        setClosed(false);
      }
  }
  return (
    <div>
      <Navigation dispatcher={dispatch} openHandler={openSideBarHandler}/>
      <Switch>
          <Route 
          exact 
          path='/' 
          >
            <ClosedContext.Provider value={{closed: closed, closeHandler: closeSideBarHandler, sliderState, dispatch}}>
              <HomePage/>
            </ClosedContext.Provider>
          </Route>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/auth" component={Auth}/>
          <Route exact path='/hats' render={() => <h1>hats page</h1>}/>
        
     </Switch> 
    </div>
  );
}

export default withRouter(App);
