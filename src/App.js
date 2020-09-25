import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './pages/Landing.js';
import Events from './pages/Events.js';
import Scroller from './components/Scroller/Scroller.js'




class App extends React.Component {
 

  render(){
  
        return (

          <div className="App">
              <>
            <Router>
              
                <Scroller showBelow={250}></Scroller>
                  <Switch>

                      <Route exact path="/" component ={Landing}></Route>
                  
                      <Route  path="/:artist/events" component ={Events}></Route> 

                  </Switch>
              </Router>
              
              </>
                
          </div>
              
        );
  }
}

export default App;