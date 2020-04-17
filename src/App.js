import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import { Route, Switch, withRouter} from 'react-router-dom';
import { auth, createUserProfile} from './firebase/firebase';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/user/userActionCreators';
import useSlider from './hooks/useSlider';
import Checkout from './pages/Checkout/Checkout';
import SlideBarChanger from './components/SlideBarChanger/SlideBarChanger';
import Spinner from './components/UI/Spinner/Spinner';

export const ClosedContext = React.createContext();

function App({setCurrentUser, history, currentUser}) {
  const { dispatch, sliderState, setClosed, closed, closeSideBarHandler} = useSlider();

    useEffect(() => {

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(userSnapshot => {
          setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data()
          })
          setClosed(false);
          dispatch({type: 'close'})
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
      console.log("umounted")
      localStorage.removeItem('name')
    }
  }, [])
  
  const openSideBarHandler = (path, typeofDispatch) => { 
      if(!currentUser){
        setClosed(true)
        dispatch(typeofDispatch);
      } else {
        history.push(path);
        setClosed(false);
      }
  }

  console.log(currentUser)
  return (
    <div>
      <Navigation dispatcher={dispatch} openHandler={openSideBarHandler}/>
      <ClosedContext.Provider value={{closed, closeHandler: closeSideBarHandler}}>
        <SlideBarChanger sliderState={sliderState} dispatch={dispatch}/> 
      </ClosedContext.Provider>
      <Switch>
          <Route exact path='/'>
              <HomePage/>
              <Spinner/>
          </Route>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/checkout" component={Checkout} />
          <Route path="/myprofile" render={() => <h1>Hello from myprofile</h1>}/>
     </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user))
})


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
