"use strict";

const addItemToCart = (itemName) => {
  //Add item name to the user's cart.
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  // Update the cart total value to 0.00
  // Remove all children from #cart-items.
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  // As you add items, this updates the cart total.
  // It seems that you can retrieve and set values 
  // using .html(), depending on whether you send in 
  // an argument or not. Here, send in chars that can
  // be cast to a Number.
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  //Getting and setting the number of coffees sold.
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
//const addToCartBtn = 
$('.add-to-order').on('click', () => {
  alert('Added to cart.');
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});