import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';


function App() {
  
  return (
    <Router >
       <Switch>          
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/posts/:id">
            <PostDetails/>
          </Route>        
          <Route exact path="/">
            <Home />
          </Route>          
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
