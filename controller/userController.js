const mongoose = require("mongoose");
const response = require("../libs/responseLib.js");
const userpath = require("./../models/userModel");
const userModel = mongoose.model("User");

let signup = (req, res) => {
  let createUser = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobileNumber: req.body.mobileNumber,
    countryCode: req.body.countryCode,
    email: req.body.email,
    password: req.body.password,
    createdOn: Date.now(),
  });
  console.log(createUser);
  createUser.save((err, createuser) => {
    console.log(err);
    if (err) {
      let apiResponse = response.response(
        false,
        "signup is not succesfull",
        200,
        err
      );
      res.send(apiResponse);
    } else {
      console.log(createuser);
      let apiResponse = response.response(
        false,
        "signup succesfully",
        200,
        createuser
      );
      res.send(apiResponse);
    }
  });
};

//signin function is end

//signin function is start

let signin = (req, res) => {
  userModel.findOne(
    { email: req.body.email, password: req.body.password },
    (err, result) => {
      if (err) {
        let apiResponse = response.response(true, err.message, 404, null);
        res.send(apiResponse);
      } else if (!result) {
        let apiResponse = response.response(
          true,
          "email and password mismatched",
          400,
          null
        );
        res.send(apiResponse);
      } else if (result) {
        let apiResponse = response.response(
          true,
          "login successfull",
         200,
          null
        );
        res.send(apiResponse);
      }
    }
  );
};
//sign in function end

module.exports = {
  signup: signup,
  signin: signin,
};
