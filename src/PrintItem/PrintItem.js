import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PrintItem.css';

class PrintItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PrintItem">

        <div className="row itemDiv">

            <div className="col-sm-4 col-3 d-md-none"></div>
            <div className="col-md-3 col-sm-4 col-6 itemDiv">
                <img src={this.props.imgSrc} className="blackBorder finalImage"/>
            </div>
            <div className="col-sm-4 col-3 d-md-none"></div>

            <div className="col-md-9 col-12 row">

                <div className="col-md-4">
                    <h3>{this.props.foodName}</h3>
                    <p>No description found for this product.</p>
                </div>

                <div className="col-md-8">
                    <h5>Preparation</h5>
                    <p>{this.props.instructions}</p>
                </div>

            </div>
        </div>

      </div>
    );
  }
}

export default PrintItem;
