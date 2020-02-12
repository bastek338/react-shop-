import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import Navigation from './components/NavigationBar/Navigation';
import ShopPage from './pages/Shop/ShopPage';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
        <Route exact path='/hats' render={() => <h1>hats page</h1>}/>
     </Switch> 
    </div>
  );
}

export default App;
