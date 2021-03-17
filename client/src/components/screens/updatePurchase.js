import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";
const UpdatePurchase = () => {
  const [productname, setproductname] = useState("raman");
  const [customername, setcustomername] = useState("raman");
  const [phone, setphone] = useState(11111111111);
  const [price, setprice] = useState(10);
  const [quantity, setquantity] = useState(1);

  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);

  useEffect(() => {
    console.log("called useeffect");
    axios.get("http://localhost:5000/purchase/" + x).then((prop) => {
      console.log(prop);
      setproductname(prop.data.productname);
      setcustomername(prop.data.customername);
      setquantity(prop.data.quantity);
      setphone(prop.data.phone);
      setprice(prop.data.price);
    });
  }, [x]);

  function productnameChange(e) {
    setproductname(e.target.value);
  }

  function pricehandler(e) {
    setprice(e.target.value);
  }

  function phonehandler(e) {
    setphone(e.target.value);
  }

  function quantityhandler(e) {
    setquantity(e.target.value);
  }

  function customerhandler(e) {
    setcustomername(e.target.value);
  }
  return (
    <div
      className="hbg"
      style={{ backgroundImage: "url('../images/bg1.jpg')" }}
    >
      <div class="row">
        <div class="col s12 m8 offset-m2 l8 offset-l2">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <div class="card-title">Update Purchase Details</div>
              <form
                action={"http://localhost:5000/purchase/:" + x + "?_method=PUT"}
                method="POST"
                className="form"
              >
                <div className="div1">
                  <label className="label">Product name:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="productname"
                      id="productname"
                      placeholder="product name"
                      value={productname}
                      onChange={productnameChange}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Customer name:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="customername"
                      id="customername"
                      placeholder="customer name"
                      value={customername}
                      onChange={customerhandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Phone:</label>
                  <div className="input1">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="customer phone"
                      value={phone}
                      onChange={phonehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Price:</label>
                  <div className="input1">
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="total price"
                      value={price}
                      onChange={pricehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Quantity:</label>
                  <div className="input1">
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      placeholder="purchase quantity"
                      value={quantity}
                      onChange={quantityhandler}
                    />
                  </div>
                </div>

                <div className="buttondiv">
                  <button className="button1">Update purchase</button>
                  <form
                    className="formdelete"
                    action={
                      "http://localhost:5000/purchase/delete/:" +
                      x +
                      "?_method=DELETE"
                    }
                    method="POST"
                  >
                    <button className="button2">Delete purchase</button>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePurchase;
