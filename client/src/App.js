import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './NavBar';
import ListingForm from './ListingForm.tsx';
import InProgress from './InProgress.tsx';
import NotSelected from './NotSelected';
import Accepted from './Accepted';
import {Route, Switch} from 'react-router-dom';

function App() {

  const [inprogresslists, setInprogresslists] = useState([])
  const [notselectedlists, setNotselectedlists] = useState([])
  const [acceptedlists, setAcceptedlists] = useState([])

  useEffect(() =>{
    fetch("/inprogress")
    .then(res => res.json())
    .then(inprogresslists => setInprogresslists(inprogresslists))
  }, [])

  useEffect(() =>{
    fetch("/notselected")
    .then(res => res.json())
    .then(notselectedlists => setNotselectedlists(notselectedlists))
  }, [])

  useEffect(() =>{
    fetch("/accepted")
    .then(res => res.json())
    .then(acceptedlists => setAcceptedlists(acceptedlists))
  }, [])

  function makeNewCard(newCard){
    const arrayNewCards = [...inprogresslists, newCard]
    setInprogresslists(arrayNewCards)
  }

  return (
    <div className="App">
        <header>
         <h1 className="App-title">Habitat Hunt</h1>
        </header>
        <Switch>
          <Route path="/">
              <NavBar />
            <Route exact path="/listingform">
              <div class="container d-flex align-items-center justify-content-center">
              <ListingForm key={makeNewCard.id} makeNewCard={makeNewCard}/>
              </div>
            </Route>
            <Route exact path="/inprogress">
              <div class="container">
                <div class="row">
                {inprogresslists.map(inprogresslist =>{
                    return <InProgress key={inprogresslist.id} inprogresslist={inprogresslist}/>})}
              </div>
              </div>
            </Route>
            <Route exact path="/notselected">
              <div class="container">
                <div class="row">
              {notselectedlists.map(notselectedlist =>{
                return <NotSelected key={notselectedlist.id} notselectedlist={notselectedlist}/>}
              )}
                </div>
              </div>
            </Route>
            <Route exact path="/accepted">
              <div class="container">
                <div class="row">
                  {acceptedlists.map(acceptedlist =>{
                    return <Accepted key={acceptedlist.id} acceptedlist={acceptedlist}/>})}
                </div>
                </div>
            </Route>
          </Route>
        </Switch>
    </div>
  );
}

export default App;