import users from '../data/users';
import Joi from 'joi';

// Create a user account (signup)

const signUp = (req, res) => {
    const schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        firstname:Joi.string().required().alphanum().min(3).max(20),
        lastname:Joi.string().required().alphanum().min(3).max(20),
        password: Joi.string().min(8).required().regex(/^[a-zA-Z0-9]{8,30}$/)
    }
    
    const user = {
        id: messages.length + 1,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password
    };

    users.push(user);
    res.send(user);
}

// Login a user

const login = (req, res) => {
    const schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().min(8).required().regex(/^[a-zA-Z0-9]{8,30}$/)
    }
    const user = users.find(u => u.email === req.body.email);
    if(!user) 
    return res.status(404).send('Oops! You are not registered, kindly register to login!')
    return res.send(user);
    };

export default { login, signUp };