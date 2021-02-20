import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const AddPurchase=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			        	<div className="hh">
				          <a href="addPurchase" className="btn1" style={{passing:"5px"}}>Add Purchase</a>
				          <a href="viewPurchase" style={{passing:"5px"}}>View Purchase</a>
				        </div>
			    </div>
		    </div>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <div class="card-title">Add Purchase Details</div>
			            <table>
					        <tbody>
					          <tr>
					            <td>Product Name:</td>
					            <td><input type="text" placeholder="Product Name"/></td>
					          </tr>
					          <tr>
					            <td>Customer Name:</td>
					            <td><input type="text" placeholder="Customer Name"/></td>
					          </tr>
					          <tr>
					            <td>Phone Number:</td>
					            <td><input type="number" placeholder="Phone Number"/></td>
					          </tr>
					          <tr>
					            <td>Price:</td>
					            <td><input type="number" placeholder="Price"/></td>
					          </tr>
					          <tr>
					            <td>Quantity:</td>
					            <td><input type="number" placeholder="Quanity"/></td>
					          </tr>
					        </tbody>
				        </table>
				        <div class="card-action">
				          <a href="#" className="btn">Cancel</a>
				          <a href="#" className="btn">Add Record</a>
				        </div>
			        </div>
			      </div>
			    </div>
		    </div>
		</div>
	);
}

export default AddPurchase; 