import express from 'express';
import userfx from '../controllers/userControllers';


const route = express.Router();


// create a user account
route.post('/signup', userfx.signUp);

// Login a user
route.post('/login', userfx.login);

export default route;