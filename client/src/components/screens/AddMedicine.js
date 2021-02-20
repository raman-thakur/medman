import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const AddMedicine=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			        	<div className="hh">
				          <a href="addMedicine" className="btn1" style={{passing:"5px"}}>Add Medicine</a>
				          <a href="viewMedicine" style={{passing:"5px"}}>View Medicine</a>
				        </div>
			    </div>
		    </div>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <div class="card-title">Add Medicine Details</div>
			            <table>
					        <tbody>
					          <tr>
					            <td>Medicine Code:</td>
					            <td><input type="text" placeholder="Medicine Code"/></td>
					          </tr>
					          <tr>
					            <td>Medicine Name:</td>
					            <td><input type="text" placeholder="Medicine Name"/></td>
					          </tr>
					          <tr>
					            <td>Dealer Name:</td>
					            <td><input type="text" placeholder="Dealer Name"/></td>
					          </tr>
					          <tr>
					            <td>Price:</td>
					            <td><input type="number" placeholder="Price"/></td>
					          </tr>
					          <tr>
					            <td>Stock:</td>
					            <td><input type="number" placeholder="Stock"/></td>
					          </tr>
					          <tr>
					            <td>Description:</td>
					            <td><input type="text" placeholder="Description"/></td>
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

export default AddMedicine; 