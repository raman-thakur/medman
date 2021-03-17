import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import M from "materialize-css";

const AddMedicine = () => {
  const [code, setcode] = useState("raman");
  const [name, setname] = useState("raman");
  const [dealername, setdealername] = useState("11111111111");
  const [price, setprice] = useState(10);
  const [stock, setstock] = useState(1);
  const [description, setdescription] = useState("11111111111");

  let x = window.location.href;
  x = x.slice(1 + x.lastIndexOf("/"), x.length);

  useEffect(() => {
    console.log("called useeffect");
    axios.get("http://localhost:5000/medicine/" + x).then((prop) => {
      setcode(prop.data.code);
      setdealername(prop.data.dealername);
      setdescription(prop.data.description);
      setname(prop.data.name);
      setprice(prop.data.price);
      setstock(prop.data.stock);
    });
  }, [x]);

  function codehandler(e) {
    setcode(e.target.value);
  }
  function namehandler(e) {
    setname(e.target.value);
  }
  function dealernamehandler(e) {
    setdealername(e.target.value);
  }
  function descriptionhandler(e) {
    setdescription(e.target.value);
  }

  function pricehandler(e) {
    setprice(e.target.value);
  }
  function stockhandler(e) {
    setstock(e.target.value);
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
              <div class="card-title">Update Medicine Details</div>
              <form
                action={"http://localhost:5000/medicine/:" + x + "?_method=PUT"}
                method="POST"
                className="form"
              >
                <div className="div1">
                  <label className="label">Code:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="code"
                      id="code"
                      placeholder="medicine code"
                      value={code}
                      onChange={codehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Name:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="medicine name"
                      value={name}
                      onChange={namehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Dealer:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="dealername"
                      id="dealername"
                      placeholder="dealer name"
                      value={dealername}
                      onChange={dealernamehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Description:</label>
                  <div className="input1">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="medicine description"
                      value={description}
                      onChange={descriptionhandler}
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
                      placeholder="medicine price"
                      value={price}
                      onChange={pricehandler}
                    />
                  </div>
                </div>
                <div className="div1">
                  <label className="label">Stock:</label>
                  <div className="input1">
                    <input
                      type="number"
                      name="stock"
                      id="stock"
                      placeholder="available stock"
                      value={stock}
                      onChange={stockhandler}
                    />
                  </div>
                </div>
                <div className="buttondiv">
                  <button className="button1">Update medicine</button>
                  <form
                    className="formdelete"
                    action={
                      "http://localhost:5000/medicine/delete/:" +
                      x +
                      "?_method=DELETE"
                    }
                    method="POST"
                  >
                    <button className="button2">Delete medicine</button>
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

export default AddMedicine;
