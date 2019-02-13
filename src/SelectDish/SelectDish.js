import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

class SelectDish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
      typeValue: 'main course'
    };
  }

  updateShowDishes = (e) => {
      e.preventDefault();
      this.props.model.setShowDishes(this.state.typeValue, this.state.filterValue);
  }

  filterChanged = (e) => {
      this.setState({
        filterValue: e.target.value
      });
      // console.log(this.state.filterValue);
  }

  typeChanged = (e) => {
      this.setState({
        typeValue: e.target.value,
      });
      // console.log(this.state.typeValue);
  }

  render() {
    return (
      <div className="SelectDish row container-fluid">
        <div className="col-md-3" id="entireSidebar">
          <Sidebar model={this.props.model}/>
        </div>
        <div className="col-md-9">
          <div className="row form-inline" id="test2">
      	      <div className="col-md-12 d-none d-md-block d-lg-block" id="filter-div">
      	          <strong>FIND A DISH</strong>
      	          <form className="row" id="filterForm">
      	              <div className="form-group col-md-4 col-sm-4">
      	                <input name="filter" id="filter" type="text" value={this.state.filterValue} placeholder="Enter key words" onChange={this.filterChanged}/>
      	              </div>
      	              <div className="form-group col-md-6 col-sm-6 row" id="food-type">
      	                <select className="form-control col-md-12" id="type" onChange={this.typeChanged}>
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
      	                <button id="search" type="submit" onClick={this.updateShowDishes}>Search</button>
      	              </div>
      	          </form>
      	      </div>
      	      <div className="col-md-12 col-sm-12" id="food-menu">
      	        <div id="food-container" className="row">
      	            <div className="d-md-none col-sm-4 col-3"></div>
      	            <div className="col-md-12 col-sm-4 col-8 row" id="itemDiv">
                      <Dishes model={this.props.model}/>
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
