const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "User Profile",
  });
};

// render the sign up page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codeial | Sign In",
  });
};

// get the sign up data
module.exports.create = async function (req, res) {
  console.log("inside create function", req.body);
  if (req.body.password != req.body.confirm_password) {
    console.log("inside inside if condition for password checking");
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up", err);
      return;
    }
    if (!user) {
      console.log("creating user");
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      console.log("user found");
      return res.redirect("back");
    }
  });
};

// sign in and cerate a session for the user
module.exports.createSession = async function (req, res) {
  // find the user
  await User.findOne({ email: req.body.email }, function (req, res) {
    if (err) {
      console.log("error in finding user in signing in");
      return;
    }
    // handle user found
    if (User) {
      // handle password which doesn't match
      if(User.password != req.body.password){
        return res.redirect('back');
      }
      // handle session creation
      res.cookie('user_id', User.id);
      return res.redirect('/users/profile');
    } else {
      // handle user not found

      return res.redirect('back');
    }
  });
};


// sign in and create a session for the user
module.exports.createSession=function(req, res){
    return res.redirect('/');
}