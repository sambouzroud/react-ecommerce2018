//Dependencies
import React, {Component} from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

class MenItems extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="items">
    {PRODUCTS.map((product, index) => {
      if (product.gender === "men") {
        return(
          <div key={index} className="item">
            <Link to={`/products/${product.id}`}>
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>
            <div className="product-details">
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
            </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <div onClick={() => {this.props.addItemToCart(product);}}>
              <Icon small id="add-icon">add_shopping_cart</Icon>
                </div>
            </div>
          </div>
        )
      }
    })}
  </div>
    );
  }
}

export default MenItems;
