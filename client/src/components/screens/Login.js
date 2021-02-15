import React from 'react';
import '../../App.css';
import M from 'materialize-css';


const Login=()=>{
	return (
		<div className="hbg" style={{backgroundImage:"url('./images/bg1.jpg')"}}>
			<div class="row">
			    <div class="col s12 m8 offset-m2 l8 offset-l2">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <div class="card-title">Add Login Details</div>
			            <table>
					        <tbody>
					          <tr>
					            <td>Email:</td>
					            <td><input type="email" placeholder="Email"/></td>
					          </tr>
					          <tr>
					            <td>Password:</td>
					            <td><input type="password" placeholder="Password"/></td>
					          </tr>
					        </tbody>
				        </table>
				        <div class="card-action">
				          <a href="#" className="btn">Cancel</a>
				          <a href="#" className="btn">Login</a>
				        </div>
				        <div style={{display:"flex",justifyContent:"center"}}><p style={{paddingRight:"10px"}}>Don't have any account?</p><a href="/signup">Signup</a></div>
			        </div>
			      </div>
			    </div>
		    </div>
		</div>
	);
}

export default Login; 