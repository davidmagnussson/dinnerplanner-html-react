import React, { Component } from 'react';
import './InfoDish.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

class InfoDish extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL',
      numberOfGuests : this.props.model.getNumberOfGuests(),
      foodName: "",
      instructions: "",
      totalPrice: 0,
      ingredients: []
    }

    this.addDishToMenu = this.addDishToMenu.bind(this);
  }

  // Makes API-Call Promise and sets state as data is loaded.
  componentDidMount(){
    this.props.model.addObserver(this);
    // Stack thread: https://stackoverflow.com/questions/33242378/rendering-react-components-with-promises-inside-the-render-method
    const self = this;

      // Get ID from URL and use it to init a Promise to then set variables:
      const foodID = window.location.href.split("/").slice(-1)[0];
      this.props.model.getDish(foodID).then((data)=>{
        // Set Once:
        self.setState({
              foodName : data.title,
              instructions : data.instructions,
              pricePerServing: data.pricePerServing,
              totalPrice : Math.floor(data.pricePerServing * this.props.model.getNumberOfGuests()),
              imgSrc : data.image
            });
        data.extendedIngredients.map((ingredients) => {
          // Get the necessary info for each ingredient
          let ingredient = {
                id: ingredients.id,
                name: ingredients.name,
                baseAmount: ingredients.amount,
                amount: Math.floor(ingredients.amount * this.props.model.getNumberOfGuests()),
                unit: ingredients.unit
              };

          // Lets add to the current "ingredients" in the state.
          let newIngredients = self.state.ingredients.slice();
          newIngredients.push(ingredient);
          self.setState({
            ingredients: newIngredients
          });

        });

        // Everything went well:
        this.setState({
          status: 'LOADED'
        });

      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      });

  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // Updates ingredient amounts, number of guests and totalPrice.
  update() {
    const numGuests = this.props.model.getNumberOfGuests();

    for(let key in this.state.ingredients) {
      Math.floor(this.state.ingredients[key].amount = this.state.ingredients[key].baseAmount * numGuests)
    }

    this.setState({
      numberOfGuests: numGuests,
      totalPrice: Math.floor(this.state.pricePerServing * numGuests),
    })
  }

  // Adds the current dish to the menu when the "Add to menu" btn is clicked.
  addDishToMenu(){
    const foodID = window.location.href.split("/").slice(-1)[0];
    this.props.model.addDishToMenu(foodID);
  }

  render() {

    let ingredients, foodName, instructions, totalPrice, imgSrc,description;
    switch (this.state.status) {
      case 'INITIAL':
        description = ingredients = foodName = instructions = <em>Loading...</em>
        break;
      case 'LOADED':
        ingredients =
          this.state.ingredients.map((ingredient, index) =>
            <li key={index} className="ingredientItem col-sm-12">
              <div className="row">
                  <div id="quantityAndUnit" className="col">{ingredient.amount} {ingredient.unit}</div>
                  <div id="name" className="col">{ingredient.name}</div>
              </div>
              <br/>
            </li>
          );

        foodName = this.state.foodName;
        instructions = this.state.instructions;
        totalPrice = this.state.totalPrice;
        imgSrc = this.state.imgSrc;
        description = "No description found for this product";
        break;
      default:
        description = ingredients = foodName = instructions = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="InfoDish row container-fluid">

        {/* We pass the model as property to the Sidebar component */}
        <div id="sideBar" className="col-sm-3">
          <Sidebar model={this.props.model}/>
        </div>

        <div className="col-sm-9">
          <div className="row">
            <div className="container col-md-6 padTop col-sm-12">
                <h3>{foodName}</h3>
                <img alt="displayed food item." className="foodBigImg" src={imgSrc}/>
                <br/>
                <p>{description}</p>
                <Link to="/search">
                  <button id="backToSearch">Back To Search</button>
                </Link>
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
                              <button onClick={this.addDishToMenu} data-food-id={this.props.id} className="yellow text-left">
                                  Add to menu
                              </button>
                          </div>
                          <div className="col">
                              <p className="text-right">SEK <span id="totalIngredientCost">{this.state.totalPrice}</span></p>
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
