import React, { Component } from 'react';

import './MenuItem.css';

class MenuItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="cart-item row text-center" key={this.props.itemInformation.id}>
            <p className="foodName text-left col" id={this.props.itemInformation.id}>{this.props.itemInformation.title}</p>
            <p className="foodCostElement text-right" id={this.props.itemInformation.id}>{Math.round(this.props.itemInformation.pricePerServing*this.props.model.getNumberOfGuests())}</p> {/*Denna ska ändras till priset på rätten*/}
          </div>
    );
  }
}

export default MenuItem;
