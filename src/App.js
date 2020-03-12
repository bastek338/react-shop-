import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import { Route, Switch, withRouter} from 'react-router-dom';
import { auth, createUserProfile } from './firebase/firebase';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/user/userActionCreators';
import useSlider from './hooks/useSlider';

export const ClosedContext = React.createContext(false);

function App({setCurrentUser, history}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [closed, setClosed] = useState(false);
  const { dispatch, sliderState } = useSlider();
  
    useEffect(() => {
      let unsubscribeFromAuth = null;  
      if(loggedIn){
        setClosed(false);
      }

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(userSnapshot => setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
        setLoggedIn(true);
      } else {
        setCurrentUser(userAuth)
        setLoggedIn(false)
      }
    })

    return () => {
      unsubscribeFromAuth()
      console.log("umounted")
    }
  }, [loggedIn, setCurrentUser])

  const closeSideBarHandler = () => {
    setClosed(false);
  }
  
  const openSideBarHandler = (path, typeofDispatch) => { 
      if(!loggedIn){
        setClosed(true)
        dispatch(typeofDispatch);
      } else {
        history.push(path);
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
          <Route path="/shop" component={ShopPage} dispatcher={dispatch}/>
          <Route path="/myprofile" render={() => <h1>Hello from myprofile</h1>}/>
        
     </Switch> 
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(withRouter(App));
