import React, { Component } from 'react';
import './OverviewDish.css';

import { Link } from 'react-router-dom';
import MyDinner from '../MyDinner/MyDinner';
import FoodItem from '../FoodItem/FoodItem';

class OverviewDish extends Component {

  constructor(props) {
    super(props);

    // NOTE: ONLY FOR TESTING
    // window.setTimeout(()=>{
    //   console.log(this.props.model.getTotalMenuPrice());
    // }, 5000);
  }

  render() {

    let foodItems = this.props.model.getFullMenu().map((dish) =>
      <li key={dish.id}>{dish.title}{/* TODO: Use the FoodItem component.*/}</li>
    );

    return (
      <div className="OverviewDish row container-fluid">

        <div className="col-sm-12">

            <MyDinner model={this.props.model}/>

            <div className="restDiv col-md-12">
                <div id="meals" className="col-md-12 container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div id="mealsCenterDiv" className="col-md-8 jumbotron vertical-center">
                            <div className="row">
                              {foodItems}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div id="totalPrice" className="d-none d-md-block d-lg-block"></div>
                            Total: <br/> <span onChange={()=>{return this.props.model.getTotalMenuPrice()}}>0</span> USD
                            {/*Kan vi inte bara skriva såhär: Total: <br/> <span>{this.props.model.getTotalMenuPrice()}</span> USD    -   Varför ha en onChange?*/}
                        </div>
                    </div>
                    <hr/>
                </div>

                <div className="col-md-12">
                    <p className="text-center">
                        <Link to="/finalDish">
                          <button id="printRecipe">Print Full Recipe</button>
                        </Link>
                    </p>
                </div>

            </div>
         </div>

      </div>
    );
  }
}

export default OverviewDish;
