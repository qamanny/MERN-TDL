import './Resources/App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/Header/Navigation';
import HomePage from './Components/Header/HomePage';
import About from './Components/Header/About'

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/">
              <HomePage/>
        </Route>
        <Route path="/about">
              <About/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
