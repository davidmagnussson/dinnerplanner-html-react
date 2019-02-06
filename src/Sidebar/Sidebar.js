import React, { Component } from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    // we put on state the properties we want to use and modify in the component,
    // Här kan vi sätta alla variabler som vi behöver hämta från modellen.
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      test: 2
    }
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  // Ska vi inte längre ha this.update som observer??
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render, MAN UPPDATERAR DE OLIKA STATE:S SOM FINNS, DÅ VI HÄMTAR STATES VARIABLER UPPDATERAS DE AUTOMATISKT
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler htmlFor the input's on change event, detta är nu vår controller!
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value);
  }

  // Nedan är det vi vill rendera in där vi "Kallar" komponenten <Sidebar />
  render() {
    return (
      <div className="Sidebar col-sm-3" id="cart">
        <div id="header-in-cart" className="row">
            <div className="col">
                <strong>My Dinner</strong>
            </div>
            <div className="d-block d-md-none">
                <strong><span className="total_cost">SEK 0.00</span></strong>
                <button data-toggle="collapse" data-target="#on-mobile-collapse" type="button" id="menu-button">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </div>
        <div className="show collapse d-lg-block d-md-block" id="on-mobile-collapse">
            <br/>
            <form id="num-people-form" action="#">
                <div className="form-group row">  {/*Denna inline fungerar ej*/}
                    <label htmlFor="number-of-people" className="col">People</label>
                    <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
                </div>
            </form>
            <div id="cart-description" className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 row">
                    <p className="text-left col">Dish Name</p>
                    <p className="text-right">Cost</p>
                </div>
            </div>

            <div id="items" className="container-fluid">
              {this.state.numberOfGuests}
            </div>

            <div id="menu-list container-fluid">
                <p className="text-right"><span className="total_cost">SEK 0.00</span></p>
                <div className="text-center">
                  <Link to="/overviewDish">
                      <button id="confirm">Confirm Order</button>
                  </Link>
                </div><br/>
            </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
