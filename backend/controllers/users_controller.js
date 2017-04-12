var passport = require("passport"),
    User = require("../models/user")

// Authentication: sign up and log in

function getSignup(request, response) {
  response.render('./signup.html', { message: request.flash('signupMessage') });
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : 'frontend/home',
    failureRedirect : 'frontend/signup',
    failureFlash : true
  });
  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('./login.html', { message: request.flash('loginMessage') });
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/home',
    failureRedirect : '/login',
    failureFlash : true
  })

  return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout()
  response.render('frontend/login.html')
}


// Profile

function showProfile(request, response) {
  response.render('./frontend/profile.html')
}
// Edit profile
function editProfile(request, response) {
  response.render(`./frontend/edit_profile.html`)
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
      response.redirect('frontend/profile')
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

      response.redirect('frontend/login')
    })

  // }
}






module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,

  showProfile: showProfile,
  editProfile: editProfile,
  updateProfile: updateProfile,
  destroyUser: destroyUser
}
