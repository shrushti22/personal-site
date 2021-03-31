
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './home.js';
import Aboutme from './aboutme.js';
import Project from './project.js'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/aboutme" exact component={() => <Aboutme />} />
          <Route path="/project" exact component={() => <Project />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
