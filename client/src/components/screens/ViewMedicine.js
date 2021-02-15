import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const ViewMedicine=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <div class="card-title">Medicine Details</div>
			            <table>
			            	<thead>
			            		<tr>
			            			<th>Medicine Code</th>
			            			<th>Medicine Name</th>
			            			<th>Address</th>
			            			<th>Dealer Name</th>
			            			<th>Price</th>
			            			<th>Stock</th>
			            			<th>Description</th>
			            		</tr>
			            	</thead>
					        <tbody>
					        	<tr>
			            			<td>13A</td>
			            			<td>Mohit Raj</td>
			            			<td>Mumbai</td>
			            			<td>John</td>
			            			<td>RS 4000</td>
			            			<td>200</td>
			            			<td>For recovery of stomach pain</td>
			            		</tr>
					        </tbody>
				        </table>
				        <p style={{textAlign:"center",paddingTop:"20px",color:"gray"}}>Click on a Medicine ID to Update or Delete the record</p>
			        </div>
			      </div>
			    </div>
		    </div>
		</div>
	);
}

export default ViewMedicine; 