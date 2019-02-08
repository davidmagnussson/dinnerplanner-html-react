import React, { Component } from 'react';
import './OverviewDish.css';

import { Link } from 'react-router-dom';
import MyDinner from '../MyDinner/MyDinner';
import FoodItem from '../FoodItem/FoodItem';

class OverviewDish extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let foodItems = this.props.model.getFullMenu().map((dish) =>
      /* NOTE: Do we need ID if we have key? */
      <FoodItem key={dish.id} id={dish.id} foodName={dish.title} imgSrc={dish.image} link={"/infoDish/"+dish.id} cost={"USD "+Math.floor(dish.pricePerServing*this.props.model.getNumberOfGuests())}/>
    );

    let fullMenuPrice = this.props.model.getTotalMenuPrice();

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
                            Total: <br/> <span>{fullMenuPrice}</span> USD
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
