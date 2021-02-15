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
			      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			      <ul class="left hide-on-med-and-down">
			        <li><a href="/">HOME</a></li>
			        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dealer<i class="material-icons right">arrow_drop_down</i></a></li>
			        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Medicine<i class="material-icons right">arrow_drop_down</i></a></li>
			        <li><a class="dropdown-trigger" href="#!" data-target="dropdown3">Employee<i class="material-icons right">arrow_drop_down</i></a></li>
			        <li><a class="dropdown-trigger" href="#!" data-target="dropdown4">Customer<i class="material-icons right">arrow_drop_down</i></a></li>
			        <li><a class="dropdown-trigger" href="#!" data-target="dropdown5">Purchase Information<i class="material-icons right">arrow_drop_down</i></a></li>
			        <li><a href="login">Login</a></li>
			      </ul>
			    </div>
			</nav>

			  <ul class="sidenav" id="mobile-demo">
			    <li><a href="/" style={{color:"white"}}>HOME</a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="dropdown21">Dealer<i class="material-icons right">arrow_drop_down</i></a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="dropdown22">Medicine<i class="material-icons right">arrow_drop_down</i></a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="dropdown23">Employee<i class="material-icons right">arrow_drop_down</i></a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="dropdown24">Customer<i class="material-icons right">arrow_drop_down</i></a></li>
		        <li><a class="dropdown-trigger" href="#!" data-target="dropdown25">Purchase Information<i class="material-icons right">arrow_drop_down</i></a></li>
		        <li><a href="#" style={{color:"white"}}>Login</a></li>
			  </ul>
			  <ul id="dropdown1" class="dropdown-content">
				  <li><a href="addDealer">Add Dealer Details</a></li>
				  <li><a href="viewDealer">View Dealer Details</a></li>
			  </ul>
			  <ul id="dropdown2" class="dropdown-content">
				  <li><a href="addMedicine">Add Medicine Details</a></li>
				  <li><a href="viewMedicine">View Medicine Details</a></li>
			  </ul>
			  <ul id="dropdown3" class="dropdown-content">
				  <li><a href="addEmployee">Add Employee Details</a></li>
				  <li><a href="viewEmployee">View Employee Details</a></li>
			  </ul>
			  <ul id="dropdown4" class="dropdown-content">
				  <li><a href="addCustomer">Add Customer Details</a></li>
				  <li><a href="viewCustomer">View Customer Details</a></li>
			  </ul>
			  <ul id="dropdown5" class="dropdown-content">
				  <li><a href="addPurchase">New Purchase</a></li>
				  <li><a href="viewPurchase">View All Purchases</a></li>
			  </ul>

			  <ul id="dropdown21" class="dropdown-content dc">
				  <li><a href="/addDealer">Add Dealer Details</a></li>
				  <li><a href="viewDealer">View Dealer Details</a></li>
			  </ul>
			  <ul id="dropdown22" class="dropdown-content dc">
				  <li><a href="addMedicine">Add Medicine Details</a></li>
				  <li><a href="viewMedicine">View Medicine Details</a></li>
			  </ul>
			  <ul id="dropdown23" class="dropdown-content dc">
				  <li><a href="addEmployee">Add Employee Details</a></li>
				  <li><a href="viewEmployee">View Employee Details</a></li>
			  </ul>
			  <ul id="dropdown24" class="dropdown-content dc">
				  <li><a href="addCustomer">Add Customer Details</a></li>
				  <li><a href="viewCustomer">View Customer Details</a></li>
			  </ul>
			  <ul id="dropdown25" class="dropdown-content dc">
				  <li><a href="addPurchase">New Purchase</a></li>
				  <li><a href="viewPurchase">View All Purchases</a></li>
			  </ul>
		</div>
	);
}

export default Nav;