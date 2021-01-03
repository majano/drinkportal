import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import AsideLeft from './components/AsideLeft';
import AsideRight from './components/AsideRight';
import Header from './components/Header';

// Pages
import Highlights from './pages/Highlights';
import Insights from './pages/Insights';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Social from './pages/Social';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

      <div className="main_wrap">

        <AsideLeft />        
        
        <div className="main"> 
          
            <Switch>
              <Route path="/highlights">
                <Highlights />
              </Route>
              <Route path="/insights">
                <Insights />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/social">
                <Social />
              </Route>
              <Route exact path="/">
                <Highlights />
              </Route>
            </Switch>          
        
        </div>
        
        <AsideRight />

      </div>
      </Router>
    </div>
  );
}

export default App;
