import express from 'express';


const route = express.Router();


// create a user account
route.post('/api/v1/', messagefx.signUp);

// Login a user
route.post('/api/v1/', messagefx.logIn );

export default route;