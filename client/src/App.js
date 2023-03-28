import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './NavBar';
import ListingForm from './ListingForm';
import InProgress from './InProgress';
import NotSelected from './NotSelected';
import Accepted from './Accepted';
import {Route, Switch} from 'react-router-dom'

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() =>{
    fetch("/category")
    .then(res => res.json())
    .then(categories => setCategories(categories))
  }, [])

  console.log(categories)

  return (
    <div className="App">
        <header>
          <h1>Habitat Hunt</h1>
        </header>
        <Switch>
          <Route path="/">
              <NavBar />
            <Route exact path="/listingform">
              <ListingForm />
            </Route>
            <Route exact path="/inprogress">
              <div>
                {categories.map(category =>{
                    return <InProgress key={category.id} category={category}/>})}
              </div>
            </Route>
            <Route exact path="/notselected">
              <NotSelected />
            </Route>
            <Route>
             <Accepted exact path="/accepted"/>
            </Route>
          </Route>
        </Switch>
    </div>
  );
}

/*

const [listings, setListings] = useState([])

  useEffect(() =>{
    fetch("/listing")
    .then(res => res.json())
    .then(listings => setListings(listings))
  }, [])

      <Route exact path="/inprogress">
              <div>
                {listings.map(listing =>{
                    return <InProgress key={listing.id} listing={listing}/>})}
              </div>
            </Route>
*/

export default App;
