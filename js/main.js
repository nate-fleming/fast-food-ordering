console.log('hello');

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwhichType: 'chicken',
    fries: true,
    drinksize: 'small'
}



// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()