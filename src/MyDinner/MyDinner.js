import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyDinner extends Component {
  render() {
    return (
      <div className="MyDinner">

        <div id="myDinner" className="container-fluid col-md-12">
            <div className="row">
                <div className="col-md-6 row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h3 className="text-left">My Dinner: <span>{/*numberOfGuests*/}</span> people</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <Link to="/search">
                      <button id="backToSearch" className="float-right">
                          Go back and edit dinner
                      </button>
                    </Link>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default MyDinner;
