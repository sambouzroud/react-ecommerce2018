import React, {Component} from 'react';

import { Link } from 'react-router';

import '../../index.css';


class Confirm extends Component {

    
    constructor(props)
  {
    super(props);
  }

    render() {
        return (
            <div>

                <div className="addressForms">

                    <div className="signUp checkout">
                    
                    <h4 className="formHeader">Customer Information</h4>
                    <div className="form-group">
                        <label>First Name</label>
                        <input placeholder='first-name' className="form-control" type="text"></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input placeholder='last-name' className="form-control" type="text"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input placeholder= 'email'className="form-control" type="text"></input>
                    </div>

                    <br />
                    <h4 className="formHeader">Shipping Address</h4>
                        <div className="form-group">
                            <label>Address 1</label>
                            <input placeholder='address-1' className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label>Address 2</label>
                            <input placeholder= 'address-2' className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input placeholder='city' className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <input placeholder= 'state' className="form-control" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label>Zip Code</label>
                            <input placeholder='zip' className="form-control" type="text"></input>
                        </div>

                        {this.props.empty_fields ?
                            <p className="message">Please fill out all the fields</p> :
                            <p></p>
                        }

                        <button className="stripe-button">Submit Payment</button>
                    </div>
                </div>
           
            </div>
        );
    }
}



export default Confirm;