module.exports.profile = function (req, res) {
  return res.render("userProfile", {
    title: "checking",
    nav: "layout",
  });
};

module.exports.about = function (req, res) {
  return res.render("layout", {
    title: "about",
  });
};

  // render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeil | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
 return res.render("user_sign_in", {
    title: "Codeil | Sign In",
  });
};