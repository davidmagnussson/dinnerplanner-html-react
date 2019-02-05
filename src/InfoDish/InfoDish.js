import React, { Component } from 'react';
import './InfoDish.css';
import Sidebar from '../Sidebar/Sidebar';

class InfoDish extends Component {
  render() {
    return (
      <div className="InfoDish row container-fluid">

        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>

        <div className="col-sm-9">
          <div className="row">
            <div className="container col-md-6 padTop col-sm-12">
                <h3>{/*foodName*/}</h3>
                <img className="foodBigImg" src="{/*TODOOOO imgSrc*/}"/>
                <br/>
                <p>{/*foodDesc*/}</p>
                <button id="backToSearch">Back To Search</button>
                <br/><br/>
            </div>

            <div id="ingredientContainer" className="col-md-6 col-sm-12">
              <div id="ingredientBox" className="col-xs-12 lightYellow text-left">
                  <div id="ingredients" className="col-sm-12">
                      <p>Ingredients for <span id="numberOfGuests">{/*numberOfGuests*/}</span> people</p>
                      <hr/>
                      <div className="col-sm-12 row">
                      <ul id="ingredientList" className="col-sm-12">
                          {/*ingredientsHtml*/}
                      </ul>
                      </div>
                  </div>

                  <div id="ingredientSummary" className="col-sm-12">
                      <hr/>
                      <div className="row">
                          <div className="col">
                              <button id="addToMenu" data-food-id="${id}" className="yellow text-left">
                                  Add to menu
                              </button>
                          </div>
                          <div className="col">
                              <p className="text-right">USD <span id="totalIngredientCost">{/*totalIngredientCost*/}</span></p>
                          </div>
                      </div>

                  </div>
              </div>
           </div>

        </div>

        <div className="row">
            <div className="container col-md-12 padTop">
                <h3>Preparation</h3>
                <p>{/*instructions*/}</p>
            </div>
        </div>

      </div>
    </div>
    );
  }
}

export default InfoDish;
