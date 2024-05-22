const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Authmodel = require('../models/Authmodel');
const saltRounds = 10;
const secret = process.env.JWT_SECRET_KEY;

function SIGNUP_NEW_USER(req, res, next) {
    if (req.body.password) {
      bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (hash) {
          // Create a new user via Authmodel
          const NEW_USER = new Authmodel({ ...req.body, password: hash });
          // Store the user in the database
          NEW_USER.save()
            .then((response) => {
              if (response._id) {
                return res.status(200).json({
                  success: true,
                  message: "Account created successfully",
                });
              } else {
                return res.status(200).json({
                  success: true,
                  message: "Something went wrong",
                  error: err,
                });
              }
            })
            .catch((error) =>
              res.status(500).json({
                success: false,
                error: error,
              })
            );
        } else {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
      });
    }
  }


async function LOGIN_USER(req, res, next) {
    /**
     * Get the data from request object
     * Check whether given email is available in the database
     * If account is available then store the account data temporarily in the variable
     * If user account is not in the database, then respond user accordingly
     * Check for the password equality and response accordingly
     */
    const { email, password } = req.body;
    try {
      const response = await Authmodel.findOne({ email });
      if (response && response._id) {
        bcrypt.compare(password, response.password).then(function (result) {
          if (result) {
            const token = jwt.sign(
              {
                role: response.roles,
                uid: response._id
              },
              secret,
              {
                expiresIn: '10h', // expires in 10hours
              }
            );
            // GENERATE JWT TOKEN AND SEND IT IN RESPONSE BODY
            return res.status(200).json({
              success: true,
              message: "Account sign in successful",
              token: token,
              userId: response._id
            });
          } else {
            res.status(401).json({
              success: false,
              message: "Email ID or Phone Number or Password is wrong",
            });
          }
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Account does not exists",
          token: null,
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error,
      });
    }
  }


function GET_ALL_USERS(req, res, next) {
    Authmodel.find()
      .then((response) => {
        if (response.length > 0) {
          return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: response
          })
        } else {
          return res.status(200).json({
            success: true,
            message: "No users found!",
            data: [],
          })
        }
      })
      .catch((error) => {
        return res.status(500).json({
          success: false,
          error: error,
        });
      });
  }

function GET_USER_BYID (req, res, next) {
    const { userId = "" } = req.params;
    Authmodel.findById(userId)
      .then((response) => {
        if (response && response._id) {
          return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: response
          })
        } else {
          return res.status(200).json({
            success: true,
            message: "No users found!",
            data: {},
          })
        }
      })
      .catch((error) => {
        return res.status(500).json({
          success: false,
          error: error,
        });
      });
  }

module.exports = {
    SIGNUP_NEW_USER,
    LOGIN_USER,
    GET_ALL_USERS,
    GET_USER_BYID
}