import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import './styles.css';


class Checkout extends Component {

    
    constructor(props)
  {
    super(props);
  }

    render() {
        return (
<div>
    <form>
{/* <div id="card-success" class="hidden">
  <i class="fa fa-check"></i>
  <p>Payment Successful!</p>
</div>
<div id="form-errors" class="hidden">
  <i class="fa fa-exclamation-triangle"></i>
  <p id="card-error">Card error</p>
</div> */}
<div id="form-container">

  <div id="card-front">
    <div id="shadow"></div>
    <div id="image-container">
      <span id="amount">paying: <strong>$99</strong></span>
      <span id="card-image">
      
        </span>
    </div>
    

    <label for="card-number">
        Card Number
      </label>
    <input type="text" id="card-number" placeholder="1234 5678 9101 1112" length="16"></input>
    <div id="cardholder-container">
      <label for="card-holder">Card Holder
      </label>
      <input type="text" id="card-holder" placeholder="e.g. John Doe" ></input>
    </div>
    
    <div id="exp-container">
      <label for="card-exp">
          Expiration
        </label>
      <input id="card-month" type="text" placeholder="MM" length="2"></input>
      <input id="card-year" type="text" placeholder="YY" length="2"></input>
    </div>
        <div id="cvc-container">
      <label for="card-cvc"> CVC/CVV</label>
      <input id="card-cvc" placeholder="XXX-X" type="text" min-length="3" max-length="4"></input>
      <p>Last 3 or 4 digits</p>
    </div>
   
  </div>
 
  <div id="card-back">
    <div id="card-stripe">
    </div>

  </div>
  
  <input type="text" id="card-token" ></input>
  <button type="button" id="card-btn"><Link to="/Thanks">Submit </Link></button>
  {/* <button className="stripe-button"><Link to="/Thanks">Submit </Link></button> */}

</div>
        </form>
    </div>




        )
      }
}




export default Checkout;