import React, { Component } from 'react';
import './OverviewDish.css';

class OverviewDish extends Component {
  render() {
    return (
      <div className="OverviewDish row container-fluid">

        <div className="col-sm-12">
            <div id="myDinner" className="container-fluid col-md-12">
                <div className="row">
                    <div className="col-md-6 col-sm-12 row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <h3 className="text-left">My Dinner: <span>{/* numberOfGuests*/}</span> people</h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button id="backToSearch" className="float-right">
                            Go back and edit dinner
                        </button>
                    </div>
                </div>
            </div>

            <div className="restDiv col-md-12">
                <div id="meals" className="col-md-12 container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div id="mealsCenterDiv" className="col-md-8 jumbotron vertical-center">
                            <div className="row">
                              {/*foodItems*/}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div id="totalPrice" className="d-none d-md-block d-lg-block"></div>
                            Total: <br/> <span>{/*totalMenuPrice*/}</span> USD
                        </div>
                    </div>
                    <hr/>
                </div>

                <div className="col-md-12">
                    <p className="text-center">
                        <button id="printRecipe">Print Full Recipe</button>
                    </p>
                </div>

            </div>
         </div>

      </div>
    );
  }
}

export default OverviewDish;
