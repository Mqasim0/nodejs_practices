const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }
    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {}
    return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};

// 21 terminology
// hodl hold on for deal life
// alt coins other than bit coins are alt coins
// fomo fear of missing out
// jomo joy of missing out
// moon price upper jaye ge
// shit coins no back by any compaines comunityb run karte hai
