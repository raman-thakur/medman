import { React, useState } from "react";
const AddPurchase = () => {
  const [val, setval] = useState("raman");
  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);
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
                    />
                  </div>
                </div>

                <div className="buttondiv">
                  <button className="button1">Update purchase</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchase;
