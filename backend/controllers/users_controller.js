var passport = require("passport"),
    User = require("../models/user")

// Authentication: sign up and log in

function getSignup(request, response) {
  response.render('./static_pages/signup.ejs', { message: request.flash('signupMessage') });
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/dashboard',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('./static_pages/login.ejs', { message: request.flash('loginMessage') });
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/dashboard',
    failureRedirect : '/login',
    failureFlash : true
  })

  return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout()
  response.redirect('/')
}

// Facebook authentication

function getFacebook(request, response, next) {
  var signupStrategy = passport.authenticate('facebook', {
    scope : 'email'
  })

  return signupStrategy(request, response, next)
}

function getFacebookCallback(request, response, next) {
  var loginProperty = passport.authenticate('facebook', {
    successRedirect : '/dashboard',
    failureRedirect : './static_pages/login'
  })
  return loginProperty(request, response, next)
}

// Profile

function showProfile(request, response) {
  response.render('./user/profile')
}
// Edit profile
function editProfile(request, response) {
  response.render(`./user/edit_profile.ejs`)
  // var id = request.params.id
  // User.findById({_id: id}, function(err, user) {
  //   if (err) throw err
  //     {
  //       message: request.flash(`adminMessage`),
  //       user: user
  //     })
  // })
}



//Update profile
function updateProfile(request, response){
  var id = user.id
  // var id = request.params.id
  console.log(id)

  User.findById({_id: id}, function(err, updatedUser) {
    if (err || !updatedUser) throw err
    console.log(request.body)
    if (request.body.title) updatedUser.local.title = request.body.title

    // if (request.body.password) updatedUser.setPassword(request.body.password, function(){
    //   updatedUser.save(function(err, savedUser) {
    //     if (err) throw err
    //     response.json(savedUser)
    //     // response.redirect('/profile')
    //   })
    // })
    if (request.body.name) updatedUser.local.name = request.body.name
    if (request.body.email) updatedUser.local.email = request.body.email

    updatedUser.save(function(err, savedUser) {
      if (err) throw err
      // response.json(savedUser)
      response.redirect('/profile')
    })

  })
}

//Delete Profile
function destroyUser(request, response) {
  var id = user.id
  // var areYouSure = prompt(`ARE YOU SURE YOU WANT TO DELETE THIS METHOD?\nType: "YES DELETE METHOD"\n\n${req.body}`)
  // if (areYouSure === "YES DELETE METHOD") {

    User.remove({_id: id}, function(err) {
      if (err) response.json( {message: `Could not delete Method b/c: ${err}`} )

      response.redirect('/login')
    })

  // }
}


// Dashboard

function dashboard(request, response){
  User.findById(user.id)
      .populate('completed_exercises.exercise')
      .exec(function(err, user){
        if (err) throw err
        response.render('./user/dashboard', {completed_exercises: user.completed_exercises})
      })
}



module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getFacebook: getFacebook,
  getFacebookCallback: getFacebookCallback,

  dashboard: dashboard,
  showProfile: showProfile,
  editProfile: editProfile,
  updateProfile: updateProfile,
  destroyUser: destroyUser
}
