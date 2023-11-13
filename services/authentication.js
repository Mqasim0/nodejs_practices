const JWT = require("jsonwebtoken");

function createTokenForUser(user) {
  console.log("secret", process.env.jwtSecret);
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageUrl: user.profileImageUrl,
    role: user.role,
  };

  const token = JWT.sign(payload, process.env.jwtSecret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, process.env.jwtSecret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
