const jwt = require("jsonwebtoken");

const checkLoggedInMiddleware = (req, res, next) => {
  // Get the JWT token from the request headers or cookies
  const token = req.headers.authorization || req.cookies.token;

  if (token) {
    try {
      // Verify and decode the JWT token using the dynamic secret key
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Attach the decoded token to the request object for later use
      req.user = decodedToken;

      // User is logged in, continue to the next middleware or route
      next();
    } catch (error) {
      // Invalid token, send an error response
      res.status(401).json({ error: "Invalid token." });
    }
  } else {
    // Token is missing, send an error response
    res.status(401).json({ error: "Token not provided." });
  }
};

module.exports = {
  checkLoggedInMiddleware
}