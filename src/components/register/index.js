import React, {Component} from 'react';

import { Link } from 'react-router';

import './style.css';



class register extends Component {

    
    constructor(props)
  {
    super(props);
  }

    render() {
        return (
              <div class="agile">
			 <div class="signin-form profile">
				<h3>Register</h3>
				
				<div class="login-form">
					<form action="/" method="post">
						<input type="text" name="email" placeholder="E-mail" required=""></input>
						<input type="text" name="username" placeholder="Username" required=""></input>
						<input type="password" name="password" placeholder="Password" required=""></input>
						<input type="password" name="passwordConf" placeholder="Confirm Password" required=""></input>
                        {/* <input type="submit" value="REGISTER"></input> */}
                        <button onClick={this.handleClick}>
                        REGISTER
                       </button>
					</form>
				</div>
				<p><a href="#"> By clicking register, I agree to your terms</a></p>
			</div>
		</div>
             );
    }
}

export default register;