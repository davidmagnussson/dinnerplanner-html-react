import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FoodItem">

        <Link to="/infoDish/{/*TODOOO FOOD ID*/}">
          <div className="food-image" id="{/*(Maybe) foodID aswell, JA!*/}">
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
