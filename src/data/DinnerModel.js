const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

const httpOptions = {
  headers: {'X-Mashape-Key': API_KEY}
};

const DinnerModel = function () {

  let numberOfGuests;
  let observers = [];
  let selectedDishes=[];
  let showDishes = [];

  // Get-ers and Set-ers:
  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    document.cookie = "numberOfGuests=" + num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.setShowDishes = function(type, filter){
    showDishes = this.getAllDishes(type, filter);
    notifyObservers();
  }

  this.getShowDishes = function(){
    return showDishes;
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return selectedDishes;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    var allIngredients = [];
    for(var key in selectedDishes){
      for (var keyIn in selectedDishes[key].extendedIngredients) {
        var ingredient = selectedDishes[key].extendedIngredients[keyIn];
        allIngredients.push(ingredient);
      }
    }
    return allIngredients;
  }

  this.getMenuPrice = function(price) {
    return Math.round(price * this.getNumberOfGuests());
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var sum = 0;
    for(var key in selectedDishes){
      sum += selectedDishes[key].pricePerServing;
    }
    return Math.round(sum * this.getNumberOfGuests());
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(id) {
    this.getDish(id).then(data => {
      for(var key in selectedDishes){
        let selDishesTypes = selectedDishes[key].dishTypes;
        let currDishTypes = data.dishTypes;
        // Checks all dishTypes for this dish on the menu and sees if it matches
        // any of the dishTypes of the dish we want to add!
        let found = selDishesTypes.some(r=> currDishTypes.indexOf(r) >= 0);
        if (found) {
          this.removeDishFromMenu(selectedDishes[key].id);
        }
      }
      selectedDishes.push(data);
      for (let key in selectedDishes)
        document.cookie = selectedDishes[key].id + "=" + selectedDishes[key].id;
      // console.log("MENU: " + this.getFullMenu.length);
      notifyObservers();
    }).catch(handleError);
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    for(let key in selectedDishes){
      if (selectedDishes[key].id == id) {
        delete selectedDishes[key];
        document.cookie = id + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }
  }

  // API Calls

  this.getAllDishes = function (type,filter) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query="+type+" "+filter;
    return fetch(url,{ headers:{ 'X-Mashape-Key': API_KEY }})
      .then(processResponse)
      .catch(handleError)
  }

  //function that returns a dish of specific ID
  this.getDish = function (id) {
    let url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information";
    return fetch(url,{ headers:{ 'X-Mashape-Key': API_KEY }})
      .then(processResponse)
      .catch(handleError);
  }

  // API Helper methods
  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };

  // Init showDishes
  showDishes = this.getAllDishes('main course', '');
};

export const modelInstance = new DinnerModel();  // Lägger in hela DinnerModel objektet till en konstant som heter modelInstance, som skickas iväg
