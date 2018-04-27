//Dependencies
import React, {Component} from 'react';
//Internals
import './index.css';
import WomenItems from './WomenItems';



class WomensProducts extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="womens-products">
        <div className="womens-title">
          <h4>Women's Items</h4>
        </div>
        <WomenItems addItemToCart={this.props.addItemToCart}/>
      </div>
    )
  }
}


export default WomensProducts;
