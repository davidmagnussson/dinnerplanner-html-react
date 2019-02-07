import React, {Component} from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';

import FoodItem from '../FoodItem/FoodItem'; // TODO: USE THIS TO ITERATE FOOD ITEMS.


class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: 'INITIAL'
    }
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getShowDishes().then(dishes => {
      console.log(dishes);
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
    let dishesList = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em>Loading...</em>
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
          <FoodItem key={dish.id} id={dish.id} foodName={dish.title} imgSrc={'https://spoonacular.com/recipeImages/' + dish.imageUrls[0]} link={"/infoDish/"+dish.id}/>
        )
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="Dishes row col"> {/*Detta är diven där maten ska ligga, den hämtar sedan dishesList */}
          {dishesList}
      </div>
    );
  }
}

export default Dishes;
