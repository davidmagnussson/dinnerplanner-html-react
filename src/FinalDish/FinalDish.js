import React, { Component } from 'react';
import './FinalDish.css';

class FinalDish extends Component {
  render() {
    return (
      <div className="FinalDish row container-fluid">

        <div className="row col-sm-12">
            <div id="myDinner" className="container-fluid col-md-12">
                <div className="row">
                    <div className="col-md-6 row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h3 className="text-left">My Dinner: <span>{/*numberOfGuests*/}</span> people</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button id="backToSearch" className="float-right">
                            Go back and edit dinner
                        </button>
                    </div>
                </div>
            </div>

            <div className="restDiv col-md-12">
              {/*foodItems*/}
            </div>
         </div>

      </div>
    );
  }
}

export default FinalDish;
