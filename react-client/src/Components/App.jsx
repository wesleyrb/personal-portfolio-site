import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="" exact path="/" component={HomePage} />
          <Route name="" exact path="/dist" component={HomePage} />
          <Route name="projects" exact path="/projects" component={ProjectsPage} />
          <Route name="resume" exact path="/resume" component={ResumePage} />
        </div>
      </Router>
    )
  }
}
export default App;