import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import { Route, Switch, withRouter} from 'react-router-dom';
import { auth, createUserProfile, addCollectionToFirestore } from './firebase/firebase';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/user/userActionCreators';
import useSlider from './hooks/useSlider';
import Checkout from './pages/Checkout/Checkout';
import SlideBarChanger from './components/SlideBarChanger/SlideBarChanger';
import { selectCollectionsForOverview  } from './redux/selectors/collection';

export const ClosedContext = React.createContext();

function App({setCurrentUser, history, currentUser, collection}) {
  const [loggedIn, setLoggedIn] = useState(false);
  const { dispatch, sliderState, setClosed, closed, closeSideBarHandler} = useSlider();
  
  console.log(collection)

    useEffect(() => {
      let unsubscribeFromAuth = null;  
      if(currentUser){
        setClosed(false);
      }

      addCollectionToFirestore('collections', collection.map(({title, items}) => ({title, items})))

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

  return (
    <div>
      <Navigation dispatcher={dispatch} openHandler={openSideBarHandler}/>
      <ClosedContext.Provider value={{closed, closeHandler: closeSideBarHandler}}>
        <SlideBarChanger sliderState={sliderState} dispatch={dispatch}/> 
      </ClosedContext.Provider>
      <Switch>
          <Route exact path='/'>
              <HomePage/>
          </Route>
          <Route path="/shop" component={ShopPage} dispatcher={dispatch}/>
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
  currentUser: state.user.currentUser,
  collection: selectCollectionsForOverview(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
