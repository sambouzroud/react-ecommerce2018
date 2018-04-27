import React, {Component} from 'react';

import { Link } from 'react-router';
// var router = express.Router();
var User = require('../../models/user');
var express = require('express');

// import './style.css';


class login extends Component {

    
    constructor(props)
  {
    super(props);
  }

    render() {
        return (
            <div class="w3">
			<div class="signin-form profile">
				<h3>Login</h3>
				
				<div class="login-form">
					<form action="/" method="post">
						<input type="text" name="logemail" placeholder="E-mail" required=""></input>
						<input type="password" name="logpassword" placeholder="Password" required=""></input>
						<div class="tp">
							<input type="submit" value="LOGIN NOW"></input>
						</div>
					</form>
			
            </div>
            </div>
            </div>
        );
    }
}
		
        export default login;