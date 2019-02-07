import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FoodItem.css';

class FoodItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FoodItem">

        <Link to={this.props.link}>
          <div className="food-image" id={this.props.id}>
              <div>
                  <img alt="food pic" src={this.props.imgSrc}/>
              </div>
              <div id="food-name">
                  <p>{this.props.foodName}</p>
              </div>
              <p className="text-right">{this.props.cost}</p>
          </div>
        </Link>

      </div>
    );
  }
}

export default FoodItem;
