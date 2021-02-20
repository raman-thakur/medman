import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const ViewPurchase=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			        	<div className="hh">
				          <a href="addPurchase" style={{passing:"5px"}}>Add Purchase</a>
				          <a href="viewPurchase" className="btn1" style={{passing:"5px"}}>View Purchase</a>
				        </div>
			    </div>
		    </div>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text res">
			          <div class="card-title">Purchase Details</div>
			            <table className="table">
			            	<thead>
			            		<tr>
			            			<th>Product Name</th>
			            			<th>Customer Name</th>
			            			<th>Phone Number</th>
			            			<th>Price</th>
			            			<th>Quantity</th>
			            		</tr>
			            	</thead>
					        <tbody>
					        	<tr>
			            			<td>Nice</td>
			            			<td>Mohit Raj</td>
			            			<td>9876542378</td>
			            			<td>RS 4000</td>
			            			<td>200</td>
			            		</tr>
					        </tbody>
				        </table>
				        <p style={{textAlign:"center",paddingTop:"20px",color:"gray"}}>Click on a Purchase ID to Update or Delete the record</p>
			        </div>
			      </div>
			    </div>
		    </div>
		</div>
	);
}

export default ViewPurchase; 