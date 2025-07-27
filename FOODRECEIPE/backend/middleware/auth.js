const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        req.user = decoded;
        next(); // ✅ Only proceed after successful verification
      }
    });
  } else {
    return res.status(401).json({ message: "Token missing" });
  }
};

module.exports = verifyToken;