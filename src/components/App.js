import React from 'react';
import {  BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Intro from './Intro';
import Guide from './Guide';
import Reference from './Reference';
import Home from './Home';

function App() {
return(
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/intro" component={Intro}/>
                <Route path="/guide" component={Guide}/>
                <Route path="/refer" component={Reference}/>
            </Switch>
        </div>
    </Router>
)

}
export default App;