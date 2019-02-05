import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="row text-center justify-content-center">
                <div className="col-md-6" id="site-information">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br/><br/>
                    <Link to="/search">
                        <button type="button">Create new dinner</button>
                    </Link>
                </div>
            </div>
      </div>
    );
  }
}

export default Welcome;
