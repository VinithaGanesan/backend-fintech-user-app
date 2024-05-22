const AuthorizationShield = require('../Middlewares/AuthorizationShield');
const TokenShield = require('../Middlewares/TokenShield');
const { SIGNUP_NEW_USER, LOGIN_USER, GET_ALL_USERS, GET_USER_BYID } = require('../Router/AuthRouter');

const AuthRouter = require('express').Router();

/**
 * METHOD - POST
 * This method helps us to create a new user account
 */

AuthRouter.post('/create', SIGNUP_NEW_USER);

/**
 * METHOD = POST
 * Helps to signin user
 */
AuthRouter.post("/signin", LOGIN_USER);

/**
 * METHOD - GET
 * Helps to list down all the users
 */

AuthRouter.get('/list', TokenShield, AuthorizationShield, GET_ALL_USERS);

/**
 * METHOD - GET
 * Helps to get the user with help of user id
 */

AuthRouter.get("/:userId",TokenShield, AuthorizationShield, GET_USER_BYID);

module.exports = AuthRouter;
