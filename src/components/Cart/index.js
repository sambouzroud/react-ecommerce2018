import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import map from 'lodash/map';



import './index.css';

class CartProducts extends Component {
  getCartTotal() {
    let total = 0;
    this.props.shopping_cart.map((item, index) => {
        total += item.price;
    });
    return total;
}

componentDidMount() {
    
}

  render() {
    return(
      <div className="shoppingCart">
      <h3 className="cartHeading">Shopping Cart</h3>
      <table>
          <tbody>
              <tr className="tableHeaders">
                  <th></th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th className="deleteCol"></th>
              </tr>
          {this.props.shopping_cart.map((item, index) =>
              <tr key={index}>
                  
                  <td>{item.name}</td>
                  <td>1</td>
                  <td>${item.price}.00</td>
                  <td onClick={()=> this.props.deleteFromCart(index)}className="deleteCol">x</td>
              </tr>
          )}
              <tr>
                  <td colSpan="3">Subtotal</td>
                  <td colSpan="2">${this.getCartTotal()}.00</td>
              </tr>
          </tbody>
      </table>
      <div>
      <button className="confirmButton"><Link to="/confirm">Checkout</Link></button>
      </div>
  </div>
)
}
}

export default CartProducts;