import React, { Component } from 'react';
import './FinalDish.css';

import MyDinner from '../MyDinner/MyDinner';
import PrintItem from '../PrintItem/PrintItem';

class FinalDish extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let foodItems = this.props.model.getFullMenu().map((dish) =>
      /* NOTE: Do we need ID if we have key? */
      <PrintItem key={dish.id} foodName={dish.title} imgSrc={dish.image} instructions={dish.instructions}/>
    );

    return (
      <div className="FinalDish row container-fluid">

        <div className="col-sm-12">
            <MyDinner model={this.props.model}/>

            <div className="restDiv col-md-12">
              {foodItems}
            </div>
         </div>

      </div>
    );
  }
}

export default FinalDish;
