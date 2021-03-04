import React from "react";
import "../../App.css";
import M from "materialize-css";
import { react, useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // console.warn("okkkk");
  const [loggedin, setloggedin] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/isloggedin").then((props) => {
      setloggedin(props.data.loggedin);
    });
  }, []);

  let x = (
    <div
      className="hbg"
      style={{ backgroundImage: "url('./images/bg1.jpg')" }}
    ></div>
  );

  if (loggedin === 0) return <h1>NOT LOGGEDIN</h1>;
  else return x;
  //   return <h1>okkkkkkkkkkkkkkkkkkk</h1>;
};

export default Home;
