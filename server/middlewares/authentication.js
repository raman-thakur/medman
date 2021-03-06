const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const authentication = (req, res, next) => {
  jwt.verify(req.cookies.jwt, process.env.jwtkey, (err, authData) => {
    if (err) res.send({ loggedin: 0 });
    else next();
  });
};

module.exports = authentication;
