// Alex Tindall Mod 3 Assigment

// Pulls in all the inputs as elements and saves the to variables
const glutenFreeInputElement = document.querySelector("#glutenFreeInput");
const isVeganInputElement = document.querySelector("#isVeganInput");
const isLocalInputElement = document.querySelector("#isLocalInput");
const restaurantFormElement = document.querySelector("#restaurantForm");

// Creating the array to store the restaurant names
let restaurants = [];


// TODO Need one for each restaurant
new AddRestaurant("Macho Meals", "337 St Paul Ave.", false, false, false)
new AddRestaurant("Veganic Corner", "24 S. Buckingham Road", true, true, true)
new AddRestaurant("Sherryl Meals", "7897 Glen Eagles Court", true, false, false)
new AddRestaurant("Salad Heaven", "593 Harvey Street", false, true, true)
new AddRestaurant("Root Shoots", "18 South Chapel Street", true, true, true)
new AddRestaurant("Grill Moguls", "40 State Rd.", true, false, false)
new AddRestaurant("NovaFood", "9026 Jones Rd.", true, true, false)
new AddRestaurant("Sangli", "426 Summerhouse Ave.", false, false, false)
new AddRestaurant("Lavoya Diner", "83 Beacon Lane", true, false, true)
new AddRestaurant("Andisova", "474 Mayfield Ave.", true, false, false)



// Constructor function that creates the properties for a restaurant and pushes it to the array
function AddRestaurant(name, address, glutenFree, vegan, isLocal) {
    this.name = name;
    this.address = address;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.isLocal = isLocal;
    this.pushToRestaurants = function () {
        restaurants.push(this);
    }
    this.pushToRestaurants();
}

// Adds the original array to the webpage on program start up
for (let i = 0; i < restaurants.length; i++) {
    document.querySelector("#restaurantResults").innerHTML += `
        <div class="restaurantCard"> 
        <p id="restNameOut">Name: ${restaurants[i].name}</p>
        <p id="restAddressOut">Address: ${restaurants[i].address}</p>
        </div>
        `
}

// onchange function
restaurantFormElement.onchange = function (e) {
    e.preventDefault()
    console.log(glutenFreeInputElement.checked);
    document.querySelector("#restaurantResults").innerHTML = ""

    // Need to innitially remove all the elements of the array upon change to get the array to be empty
    const removeArrayLength = restaurants.length
    for (let i = 0; i < removeArrayLength; i++) {
        restaurants.pop([i])
    }

    // Used to re-add the elements to the array to have the base selection availible
    new AddRestaurant("Macho Meals", "337 St Paul Ave.", false, false, false)
    new AddRestaurant("Veganic Corner", "24 S. Buckingham Road", true, true, true)
    new AddRestaurant("Sherryl Meals", "7897 Glen Eagles Court", true, false, false)
    new AddRestaurant("Salad Heaven", "593 Harvey Street", false, true, true)
    new AddRestaurant("Root Shoots", "18 South Chapel Street", true, true, true)
    new AddRestaurant("Grill Moguls", "40 State Rd.", true, false, false)
    new AddRestaurant("NovaFood", "9026 Jones Rd.", true, true, false)
    new AddRestaurant("Sangli", "426 Summerhouse Ave.", false, false, false)
    new AddRestaurant("Lavoya Diner", "83 Beacon Lane", true, false, true)
    new AddRestaurant("Andisova", "474 Mayfield Ave.", true, false, false)

    // Runs through the if conditional statement to compare the checked-boxes to the array property values
    const lengthOfRestaurantArray = restaurants.length;
    for (let i = 0; i < lengthOfRestaurantArray; i++) {
        if ((glutenFreeInputElement.checked === restaurants[i].glutenFree || glutenFreeInputElement.checked === false) &&
            (isVeganInputElement.checked === restaurants[i].vegan || isVeganInputElement.checked === false) &&
            (isLocalInputElement.checked === restaurants[i].isLocal || isLocalInputElement.checked == false)) {

            document.querySelector("#restaurantResults").innerHTML += `
                <div class="restaurantCard"> 
                <p id="restNameOut">Name: ${restaurants[i].name}</p>
                <p id="restAddressOut">Address: ${restaurants[i].address}</p>
                </div>
                `
        }
    }
}