import express from 'express';
import userfx from '../controllers/userControllers';


const route = express.Router();


// create a user account
route.post('/api/v1/auth/signup', userfx.signUp);

// Login a user
route.post('/api/v1/auth/login', userfx.login);

export default route;