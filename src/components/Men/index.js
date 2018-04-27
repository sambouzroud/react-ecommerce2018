//Dependencies
import React, {Component} from 'react';
//Internals
import MenItems from './MenItems';
import './index.css';

class MensProducts extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="mens-products">
        <div className="mens-title">
          <h4>Men's Items</h4>
        </div>
        <MenItems addItemToCart={this.props.addItemToCart}/>
      </div>
    )
  }
}


export default MensProducts;
