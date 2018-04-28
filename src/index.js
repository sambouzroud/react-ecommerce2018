import React, {Component} from 'react';
import ReactDOM from 'react-dom';



import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Women from './components/Women';
import Men from './components/Men';
import Clothes from './components/Clothes';
import Accessories from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import Thanks from './components/Thanks';

import login from './components/login';

import checkout from './components/checkout';





import confirm from './components/confirm';

class Main extends Component
{
constructor(props)
{
  super(props);

  this.addItemToCart = this.addItemToCart.bind(this);
  this.deleteFromCart = this.deleteFromCart.bind(this);
  this.state = {shopping_cart: []};
}

addItemToCart(item)
{
  console.log(item);
    this.setState({shopping_cart: [...this.state.shopping_cart, item]});
}

deleteFromCart(itemIndex)
{
  const cart = [...this.state.shopping_cart];
  cart.splice(itemIndex, 1);
    this.setState({shopping_cart: cart});
}

  render()
  {
    return (<BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Cart" component={() => <Cart deleteFromCart={this.deleteFromCart} shopping_cart={this.state.shopping_cart}/>} />
            <Route path="/women" component={() => <Women addItemToCart={this.addItemToCart}/>}  />
            <Route path="/men" component={() => <Men addItemToCart={this.addItemToCart}/>} />
            <Route path="/clothes" component={Clothes}  />
            <Route path="/accessories" component={() => <Accessories addItemToCart={this.addItemToCart}/>} /> />
            <Route exact path="/products/:id" component={ShowProduct} />
            
            <Route path="/login" component={login}  />
            
            <Route path="/confirm" component={confirm}  />
            <Route path="/Thanks" component={Thanks}  />
           
            <Route path="/checkout" component={checkout}  />
            
          </Switch>
        </BaseLayout>
      </BrowserRouter>)
  }
}

ReactDOM.render(
  <Main/>

, document.getElementById('root'));

