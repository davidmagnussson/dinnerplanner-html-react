import React, { Component } from 'react';
import './FinalDish.css';

import MyDinner from '../MyDinner/MyDinner';

class FinalDish extends Component {
  render() {
    return (
      <div className="FinalDish row container-fluid">

        <div className="col-sm-12">
            <MyDinner model={this.props.model}/>

            <div className="restDiv col-md-12">
              {/*foodItems*/}
            </div>
         </div>

      </div>
    );
  }
}

export default FinalDish;
