import React, { Component } from 'react';
import './InfoDish.css';
import Sidebar from '../Sidebar/Sidebar';

class InfoDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests : this.props.model.getNumberOfGuests(),
      foodName: "",
      instructions: "",
      pricePerServing: 0,
      ingredients: []
    }
  }

  componentDidMount(){
    // Stack thread: https://stackoverflow.com/questions/33242378/rendering-react-components-with-promises-inside-the-render-method
    var self = this;

      // Get ID from URL and use it to init a Promise to then set variables:
      const foodID = window.location.href.split("/").slice(-1)[0];
      this.props.model.getDish(foodID).then((data)=>{
        // Set Once:
        self.setState({
              foodName : data.title,
              instructions : data.instructions,
              pricePerServing : data.pricePerServing,
              imgSrc : data.image
            });
        data.extendedIngredients.map((ingredients) => {
          // Get the necessary info for each ingredient
          var ingredient = {
                id: ingredients.id,
                name: ingredients.name,
                amount: ingredients.amount,
                unit: ingredients.unit
              };

          // Lets add to the current "ingredients" in the state.
          var newIngredients = self.state.ingredients.slice();
          newIngredients.push(ingredient);
          self.setState({
            ingredients: newIngredients
          });

        });
      });

  }

  render() {
    let ingredients =
      this.state.ingredients.map((ingredient) =>
        <li key={ingredient.id} className="ingredientItem col-sm-12">
          <div className="row">
              <div id="quantityAndUnit" className="col">{ingredient.amount} {ingredient.unit}</div>
              <div id="name" className="col">{ingredient.name}</div>
          </div>
          <br/>
        </li>
      );

    let foodName = this.state.foodName;
    let instructions = this.state.instructions;
    let pricePerServing = this.state.pricePerServing;
    let imgSrc = this.state.imgSrc;

    return (
      <div className="InfoDish row container-fluid">

        {/* We pass the model as property to the Sidebar component */}
        <div className="col-sm-3">
          <Sidebar model={this.props.model}/>
        </div>

        <div className="col-sm-9">
          <div className="row">
            <div className="container col-md-6 padTop col-sm-12">
                <h3>{foodName}</h3>
                <img alt="displayed food item." className="foodBigImg" src={imgSrc}/>
                <br/>
                <p>No description found for this product.</p>
                <button id="backToSearch">Back To Search</button>
                <br/><br/>
            </div>

            <div id="ingredientContainer" className="col-md-6 col-sm-12">
              <div id="ingredientBox" className="col-xs-12 lightYellow text-left">
                  <div id="ingredients" className="col-sm-12">
                      <p>Ingredients for <span id="numberOfGuests">{this.state.numberOfGuests}</span> people</p>
                      <hr/>
                      <div className="col-sm-12 row">
                      <ul id="ingredientList" className="col-sm-12">
                          {ingredients}
                      </ul>
                      </div>
                  </div>

                  <div id="ingredientSummary" className="col-sm-12">
                      <hr/>
                      <div className="row">
                          <div className="col">
                              <button id="addToMenu" data-food-id={this.props.id} className="yellow text-left">
                                  Add to menu
                              </button>
                          </div>
                          <div className="col">
                              <p className="text-right">USD <span id="totalIngredientCost">{this.props.model.getMenuPrice(pricePerServing)}</span></p>
                          </div>
                      </div>

                  </div>
              </div>
           </div>

        </div>

        <div className="row">
            <div className="container col-md-12 padTop">
                <h3>Preparation</h3>
                <p>{instructions}</p>
            </div>
        </div>

      </div>
    </div>
    );
  }
}

export default InfoDish;
