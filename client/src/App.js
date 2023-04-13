import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './NavBar';
import ListingForm from './ListingForm';
import InProgress from './InProgress';
import NotSelected from './NotSelected';
import Accepted from './Accepted';
import {Route, Switch} from 'react-router-dom'

function App() {

  const [inprogresslists, setInprogresslists] = useState([])

  useEffect(() =>{
    fetch("/inprogress")
    .then(res => res.json())
    .then(inprogresslists => setInprogresslists(inprogresslists))
  }, [])

  return (
    <div className="App">
        <header>
         <h1 className="App-title">Habitat Hunt</h1>
        </header>
        <Switch>
          <Route path="/">
              <NavBar />
            <Route exact path="/listingform">
              <ListingForm />
            </Route>
            <Route exact path="/inprogress">
              <div>
                {inprogresslists.map(inprogresslist =>{
                    return <InProgress key={inprogresslist.id} inprogresslist={inprogresslist}/>})}
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

export default App;