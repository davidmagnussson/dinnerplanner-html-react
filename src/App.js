import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel';  // Hämtar dinnermodel.js
import SelectDish from "./SelectDish/SelectDish";
import InfoDish from "./InfoDish/InfoDish";
import OverviewDish from "./OverviewDish/OverviewDish";
import FinalDish from "./FinalDish/FinalDish";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner'
    }

    // Remember number of guests and selectedDishes from
    // previous sessions, through cookies.
    let numGuestsFound = false;
    document.cookie.split(/; */).map((cookie) =>  {
      // name is splitCookie[0], value is splitCookie[1]
      let splitCookie = cookie.split('=');
      if (Number.isInteger(parseInt(splitCookie[0]))) {
        modelInstance.addDishToMenu(splitCookie[0]);
      } else if (splitCookie[0] == "numberOfGuests") {
        numGuestsFound = true;
        modelInstance.setNumberOfGuests(parseInt(splitCookie[1]));
      }
    });

    if (!numGuestsFound)
      modelInstance.setNumberOfGuests(4);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={() => <SelectDish model={modelInstance} state={this.state}/>}/>
          <Route path="/infoDish" render={() => <InfoDish model={modelInstance}/>}/>
          <Route path="/overviewDish" render={() => <OverviewDish model={modelInstance}/>}/>
          <Route path="/finalDish" render={() => <FinalDish model={modelInstance}/>}/>

        </header>
      </div>
    );
  }
}

export default App;
