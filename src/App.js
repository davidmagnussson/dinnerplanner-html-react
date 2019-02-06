import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel';  // Hämtar dinnermodel.js
import SelectDish from "./SelectDish/SelectDish";
import InfoDish from "./InfoDish/InfoDish";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
      test: "Is dis a ting?",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={() => <SelectDish model={modelInstance} state={this.state}/>}/>
          <Route path="/browseDishes" render={() => <Sidebar model={modelInstance}/>}/>
          <Route path="/infoDish" render={() => <InfoDish model={modelInstance}/>}/>

        </header>
      </div>
    );
  }
}

export default App;
