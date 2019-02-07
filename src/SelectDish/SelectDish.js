import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish row container-fluid"> {/*Detta är alltså den gamla foodView */}
        <div className="col-md-3" id="test1">
          <Sidebar model={this.props.model}/>
        </div>
        <div className="col-md-9" id="test3">
          <div className="row form-inline" id="test2">
      	      <div className="col-md-12 d-none d-md-block d-lg-block" id="filter-div">
      	          <strong>FIND A DISH</strong>
      	          <form className="row" action="#" method="POST" id="filterForm">
      	              <div className="form-group col-md-4 col-sm-4">
      	                <input name="filter" id="filter" type="text" placeholder="Enter key words"/>
      	              </div>
      	              <div className="form-group col-md-6 col-sm-6 row" id="food-type">
      	                <select className="form-control col-md-12" id="type">
      	                    <option value="main course">Main Course</option>
      	                    <option value="side dish">Side Dish</option>
      	                    <option value="appetizer">Appetizer</option>
                            <option value="dessert">Dessert</option>
                            <option value="salad">Salad</option>
                            <option value="bread">Bread</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="soup">Soup</option>
                            <option value="beverage">Beverage</option>
                            <option value="sauce">Sauce</option>
                            <option value="drink">Drink</option>
      	                </select>
      	              </div>
      	              <div className="col-md-2 col-sm-2">
      	                <button id="search" type="submit">Search</button>
      	              </div>
      	          </form>
      	      </div>
      	      <div className="col-md-12 col-sm-12" id="food-menu">
      	        <div id="food-container" className="row">
      	            <div className="d-md-none col-sm-4 col-3"></div>
      	            <div className="col-md-12 col-sm-4 col-8 row" id="itemDiv">
                      <Dishes/>
      	            </div>
      	            <div className="d-md-none col-sm-2 col-1"></div>
      	        </div>
      	      </div>
      	     </div>
          </div>
      </div>
    );
  }
}

export default SelectDish;
