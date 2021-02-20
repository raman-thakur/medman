import React from 'react';
import M from 'materialize-css';

const Nav=()=>{

	document.addEventListener('DOMContentLoaded', function() {
		let options=null;
	    var elems = document.querySelectorAll('.sidenav');
	    var instances = M.Sidenav.init(elems, options);
	});

	document.addEventListener('DOMContentLoaded', function() {
		let options=null;
	    var elems = document.querySelectorAll('.dropdown-trigger');
	    var instances = M.Dropdown.init(elems, options);
    });

	return (
		<div>
			<nav>
			    <div class="nav-wrapper">
			      <a href="/" className="brand-logo" style={{left:"50px",top:"0px",fontWeight:"bold"}}><span style={{color:"white"}}>Med</span><span style={{color:"black"}}>Man</span></a>
			      <a href="#" data-target="mobile-demo" class="sidenav-trigger" style={{float:"right"}}><i class="material-icons">menu</i></a>
			      <ul class="right hide-on-med-and-down">
			        {/*<li><a href="/">HOME</a></li>*/}
			        <li><a href="addDealer">Dealer</a></li>
			        <li><a href="addMedicine">Medicine</a></li>
			        <li><a href="addEmployee">Employee</a></li>
			        <li><a href="addCustomer">Customer</a></li>
			        <li><a href="addPurchase">Purchase Information</a></li>
			        <li><a href="login">Login</a></li>
			      </ul>
			    </div>
			</nav>

			  <ul class="sidenav" id="mobile-demo">
			    <li><a href="/" style={{color:"white"}}>HOME</a></li>
		        <li><a href="addDealer" style={{color:"white"}}>Dealer</a></li>
		        <li><a href="addMedicine" style={{color:"white"}}>Medicine</a></li>
		        <li><a href="addEmployee" style={{color:"white"}}>Employee</a></li>
		        <li><a href="addCustomer" style={{color:"white"}}>Customer</a></li>
		        <li><a href="addPurchase" style={{color:"white"}}>Purchase Information</a></li>
		        <li><a href="#" style={{color:"white"}}>Login</a></li>
			  </ul>
		</div>
	);
}

export default Nav;