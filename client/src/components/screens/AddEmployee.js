import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const AddEmployee=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <div class="card-title">Add Employee Details</div>
			            <table>
					        <tbody>
					          <tr>
					            <td>Employee ID:</td>
					            <td><input type="number" placeholder="Employee ID"/></td>
					          </tr>
					          <tr>
					            <td>Employee Name:</td>
					            <td><input type="text" placeholder="Employee Name"/></td>
					          </tr>
					          <tr>
					            <td>Address:</td>
					            <td><input type="text" placeholder="Address"/></td>
					          </tr>
					          <tr>
					            <td>Salary:</td>
					            <td><input type="number" placeholder="Salary"/></td>
					          </tr>
					          <tr>
					            <td>Phone Number:</td>
					            <td><input type="number" placeholder="Phone Number"/></td>
					          </tr>
					          <tr>
					            <td>Email:</td>
					            <td><input type="email" placeholder="Email"/></td>
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

export default AddEmployee; 