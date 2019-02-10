import React, { Component } from 'react';
import './FinalDish.css';

import MyDinner from '../MyDinner/MyDinner';
import PrintItem from '../PrintItem/PrintItem';

class FinalDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foodItems:this.props.model.getFullMenu().map((dish) =>
        <PrintItem key={dish.id} foodName={dish.title} imgSrc={dish.image} instructions={dish.instructions}/>
      )
    }
  }

  componentDidMount() {
    this.props.model.addObserver(this)
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  update(){
    this.setState({
      foodItems:this.props.model.getFullMenu().map((dish) =>
        <PrintItem key={dish.id} foodName={dish.title} imgSrc={dish.image} instructions={dish.instructions}/>
      )
    })
  }
  render() {
    return (
      <div className="FinalDish row container-fluid">

        <div className="col-sm-12">
            <MyDinner model={this.props.model}/>

            <div className="restDiv col-md-12">
              {this.state.foodItems}
            </div>
         </div>

      </div>
    );
  }
}

export default FinalDish;
