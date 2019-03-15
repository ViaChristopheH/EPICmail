import express from 'express';


const route = express.Router();


// create a user account
route.post('/api/v1/users', userfx.signUp);

// Login a user
route.post('/api/v1/users', userfx.logIn );

export default route;