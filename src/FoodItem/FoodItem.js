import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodItem extends Component {
  render() {
    return (
      <div className="FoodItem">

        <Link to="/infoDish/{/*TODOOO FOOD ID*/}">
          <div className="food-image" id="{/*(Maybe) foodID aswell*/}">
              <div>
                  <img alt="food pic" src="{/*imgSrc*/}"/>
              </div>
              <div id="food-name">
                  <p>{/*foodName*/}</p>
              </div>
          </div>
        </Link>

      </div>
    );
  }
}

export default FoodItem;
