
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './App.css';





class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {button : false}
    this.handleClick = this.handleClick.bind(this);
  }
    
    handleClick() {
        this.setState(state => ({
          button: !state.button
        }));
    }

    render() {
        return(
            <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Shrushti Vasaniya</Link>
            <div class={this.state.button ? "is-active menu-toggle navbar-toggler" : "menu-toggle navbar-toggler"} onClick={this.handleClick} id="mobile-menu" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/aboutme">About me</Link>
                <Link className="nav-link" to="/project">Projects</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
              </div>
            </div>
          </nav>
        </div>
        )
        
    }
}


export default withRouter(Navbar);